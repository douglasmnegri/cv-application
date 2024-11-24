export default function Container({ children }) {
  return (
    <div className="border-2 border-gray-300 bg-gray-800 bg-opacity-80 md:w-[450px] xl:w-[550px] shadow-md p-2">
      {children}
    </div>
  );
}
