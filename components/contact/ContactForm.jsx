import React, { useState, useEffect, useMemo } from 'react';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import Toast from '../reusable/Toast';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDescription: '',
    budget: '0$ to 10K$',
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimezone, setSelectedTimezone] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    setSelectedTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
  };

  const closeToast = () => {
    setToast({ show: false, message: '', type: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.company ||
      !formData.projectDescription ||
      !formData.budget ||
      !selectedDate ||
      !selectedTime ||
      !selectedTimezone
    ) {
      alert('Please fill in all required fields before submitting.');
      return;
    }

    const finalData = {
      ...formData,
      selectedDay: selectedDate ? selectedDate.toLocaleDateString() : 'Not selected',
      selectedTime: selectedTime || 'Not selected',
      selectedTimezone: selectedTimezone || 'Not selected',
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        showToast('Form submitted successfully!', 'success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectDescription: '',
          budget: '0$ to 10K$',
        });
        setSelectedDate(null);
        setSelectedTime('');
      } else {
        showToast('Form submission failed.', 'error');
      }
    } catch (error) {
      showToast('An error occurred.', 'error');
    }
  };

  const getNextSevenWeekdays = () => {
    const days = [];
    let today = new Date();
    for (let i = 0; i < 15 && days.length < 7; i++) {
      let nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      let dayOfWeek = nextDay.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        days.push(nextDay);
      }
    }
    return days;
  };

  const availableDays = useMemo(() => getNextSevenWeekdays(), []);

  const timezones = [
    'Asia/Kolkata',
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Paris',
    'Australia/Sydney',
  ];

  const generateTimeSlots = (timezone) => {
    if (!timezone) return [];
    const slots = [];
    for (let i = 9; i <= 19; i++) {
      const date = new Date();
      date.setHours(i, 0, 0, 0);
      const timeString = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone: timezone,
      }).format(date);
      const nextHourDate = new Date(date.getTime() + 60 * 60 * 1000);
      const nextHourTimeString = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone: timezone,
      }).format(nextHourDate);
      slots.push({ value: `${i}:00`, label: `${timeString} - ${nextHourTimeString}` });
    }
    return slots;
  };

  return (
    <div className="w-full lg:w-1/2">
       {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}
      <div className="leading-loose">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          {/* Section 1: Personal Info */}
          <div className="mb-8">
            <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
              Tell us about yourself
            </p>
            <FormInput
              inputLabel="Your Name"
              labelFor="name"
              inputType="text"
              inputId="name"
              inputName="name"
              placeholderText="Your Name"
              ariaLabelName="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <FormInput
              inputLabel="Your Email"
              labelFor="email"
              inputType="email"
              inputId="email"
              inputName="email"
              placeholderText="Your email"
              ariaLabelName="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <FormInput
              inputLabel="Your Phone Number"
              labelFor="phone"
              inputType="tel"
              inputId="phone"
              inputName="phone"
              placeholderText="Your Phone Number"
              ariaLabelName="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <FormInput
              inputLabel="Company Name or Website"
              labelFor="company"
              inputType="text"
              inputId="company"
              inputName="company"
              placeholderText="Company Name or Website"
              ariaLabelName="Company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          {/* Section 2: Project */}
          <div className="mb-8">
            <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
              Tell us about your project
            </p>
            <div className="mt-6">
              <label
                className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                htmlFor="projectDescription"
              >
                Describe your project briefly
              </label>
              <textarea
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                id="projectDescription"
                name="projectDescription"
                cols="14"
                rows="6"
                aria-label="Describe your project briefly"
                value={formData.projectDescription}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mt-6">
              <label className="block text-lg text-primary-dark dark:text-primary-light mb-2" htmlFor="budget">
                Please choose a budget
              </label>
              <select
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option>0$ to 10K$</option>
                <option>10K$ to 25K$</option>
                <option>25K$ to 50K$</option>
                <option>50K$ or above</option>
                <option>Not Sure</option>
              </select>
            </div>
          </div>

          {/* Section 3: Scheduling */}
          <div>
            <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-4">
              Schedule a call with our tech experts!
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Get a 45 minutes tech consultation for free!
            </p>
            <div className="border border-gray-300 dark:border-primary-dark rounded-xl p-6">
              <div className="mb-4">
                <label className="block text-lg text-primary-dark dark:text-primary-light mb-2">Select a Day</label>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {availableDays.map((day) => (
                    <button
                      key={day.toISOString()}
                      type="button"
                      className={`p-2 border rounded-lg ${
                        selectedDate && selectedDate.toDateString() === day.toDateString()
                          ? 'bg-indigo-500 text-white'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                      onClick={() => setSelectedDate(day)}
                    >
                      {day.toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="timezone" className="block text-lg text-primary-dark dark:text-primary-light mb-2">
                  Timezone
                </label>
                <select
                  id="timezone"
                  name="timezone"
                  className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                  value={selectedTimezone}
                  onChange={(e) => {
                    setSelectedTimezone(e.target.value);
                    setSelectedTime('');
                  }}
                >
                  {timezones.map((tz) => (
                    <option key={tz} value={tz}>
                      {tz}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="schedulemeeting"
                  className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                >
                  Schedule Meeting
                </label>
                <select
                  id="schedulemeeting"
                  name="schedulemeeting"
                  className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  disabled={!selectedTimezone}
                >
                  <option value="" disabled>
                    Select a time
                  </option>
                  {generateTimeSlots(selectedTimezone).map((slot) => (
                    <option key={slot.value} value={slot.value}>
                      {slot.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Button
              title="Submit"
              type="submit"
              className="font-general-medium px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500"
              aria-label="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
