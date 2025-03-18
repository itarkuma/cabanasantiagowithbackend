import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link href="/dashboard/main">Regresar</Link>
    </div>
  );
}