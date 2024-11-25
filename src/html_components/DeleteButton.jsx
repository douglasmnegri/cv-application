export default function Button({onClick}) {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 absolute top-[-12px] right-[-12px] text-white font-bold py-2 px-3 delete-button"
    >
      X
    </button>
  );
}
