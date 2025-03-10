export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-4">
        Hello <span style={{ color: 'var(--primary-blue)' }}>World</span>
      </h1>
      <p className="font-caveat text-2xl">
        Hello <span style={{ color: 'var(--primary-blue)' }}>World</span>
      </p>
    </div>
  );
}
