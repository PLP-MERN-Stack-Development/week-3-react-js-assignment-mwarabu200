const buttonVariants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  danger: 'bg-red-600 text-white hover:bg-red-700',
};

function Button({ children, variant = 'primary', onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${buttonVariants[variant]} transition duration-200`}
    >
      {children}
    </button>
  );
}

export default Button;
