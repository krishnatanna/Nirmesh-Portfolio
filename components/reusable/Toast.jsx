import { useEffect } from 'react';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const toastTypeClasses = {
    success: 'bg-green-500',
    error: 'bg-red-500',
  };

  return (
    <div
      className={`fixed top-5 right-5 p-4 rounded-lg text-white ${
        toastTypeClasses[type] || 'bg-gray-500'
      } flex items-center shadow-lg transition-transform transform translate-x-0`}
    >
      {type === 'success' ? (
        <FiCheckCircle className="mr-2" />
      ) : (
        <FiXCircle className="mr-2" />
      )}
      {message}
    </div>
  );
};

export default Toast;
