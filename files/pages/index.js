import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-4">Prenota uno studio di registrazione</h1>
      <form action="/search" className="flex gap-2">
        <input name="city" placeholder="Città" className="border rounded p-2" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Cerca</button>
      </form>
      <div className="mt-8">
        <h2 className="text-xl mb-2">Studi consigliati</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/studio/1" className="block bg-white shadow rounded p-4">
            <img src="/img/milano1.jpg" alt="Studio Milano" className="w-full h-32 object-cover rounded" />
            <h3 className="font-bold mt-2">Studio Milano Centrale</h3>
            <div>Milano</div>
            <div>€60/h</div>
          </Link>
        </div>
      </div>
    </div>
  );
}