export default function Container({ children }) {
  return (
    <div className="border-2 border-gray-300 bg-gray-800 bg-opacity-80 w-[800px] h-[600px] shadow-md">
      {children}
    </div>
  );
}
