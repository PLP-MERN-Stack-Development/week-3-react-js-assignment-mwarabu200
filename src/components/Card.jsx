function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 mb-6 transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-[90%] md:w-[70%] lg:w-[60%] mx-auto">
      {title && (
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
          {title}
        </h2>
      )}
      <div className="text-gray-600 dark:text-gray-300">{children}</div>
    </div>
  );
}

export default Card;

