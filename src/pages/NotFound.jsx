import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-white px-4">
      <div className="max-w-xl">
        <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-3">
          Page Not Found
        </h2>
        <p className="text-neutral-600 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary-dark transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
