export default function Container({ children }) {
  return (
    <div className="border-2 border-gray-300 bg-gray-800 bg-opacity-80 w-[600px] h-[450px] shadow-md">
      {children}
    </div>
  );
}
