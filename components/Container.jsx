export default function Container({ children }) {
  return (
    <div className="w-[88%] max-w-4xl rounded-lg bg-white py-4 shadow-2xl shadow-primary/50">
      {children}
    </div>
  );
}
