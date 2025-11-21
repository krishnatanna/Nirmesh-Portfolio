import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote:
      "Nirmesh didn’t just build what we asked for but he helped us shape a better version of the product. As a founder, I really valued how he thought beyond the code to help us ship something that worked technically and strategically.",
    name: 'Ravindra Peris',
    role: 'London, UK',
  },
  {
    id: 2,
    quote:
      'We came in needing an MVP in 4 weeks. Nirmesh scoped it in 2 days, built it in 3 weeks, and it worked perfectly in production. It’s rare to find someone this fast, thoughtful, and stable under pressure.',
    name: 'Cristy Gaboury',
    role: 'Toronto, Canada',
  },
  {
    id: 3,
    quote:
      "We had a legacy platform on the brink of collapse. Nirmesh rewrote our core services into scalable microservices with zero downtime. He was like a second CTO on the team, reliable, honest, and sharp.",
    name: 'Omar Hamad',
    role: 'Dubai, UAE',
  },
  {
    id: 4,
    quote:
      "Working with Nirmesh was the closest I’ve come to working with a technical co-founder. He understands trade-offs, speaks product, and delivers on time. Every founder should have someone like him on their side.",
    name: 'Laura Pearson',
    role: 'Warsaw, Poland',
  },
 
  {
    id: 5,
    quote:
      "From backend APIs to DevOps to React UI polish, Nirmesh handled everything with the confidence of someone who’s been in it for a decade. We didn’t just get features; we got long-term reliability.",
    name: 'Andrew Krin',
    role: 'Barcelona, Spain',
  },
  {
    id: 6,
    quote:
      "We were building with AI for the first time and didn’t know what was possible. Nirmesh broke it down clearly, built a GPT-powered tool in days, and even helped us understand how to integrate it into our business model.",
    name: 'Carter Backer',
    role: 'Florida, USA',
  },
];

const TestimonialsTimeline = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        
        <div className="relative">
          <div className="hidden md:block absolute w-0.5 h-full bg-gray-300 dark:bg-gray-600 left-1/2 transform -translate-x-1/2"></div>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className="hidden md:block w-5/12"></div>
              <div className="hidden md:block relative">
                <div className="w-4 h-4 bg-primary-dark dark:bg-primary-light rounded-full"></div>
              </div>
              <div className="w-full md:w-5/12">
                <div className="bg-secondary-light dark:bg-ternary-dark p-6 rounded-lg shadow-lg">
                  <p className="text-ternary-dark dark:text-ternary-light mb-4">
                    {testimonial.quote}
                  </p>
                  <div className="text-right">
                    <p className="font-bold text-primary-dark dark:text-primary-light">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-ternary-dark dark:text-ternary-light">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsTimeline;