import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

export default function Search() {
  const router = useRouter();
  const [studios, setStudios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/studios', { params: router.query })
      .then(res => setStudios(res.data));
  }, [router.query]);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-2">Risultati ricerca</h1>
      <div className="flex">
        <aside className="w-60 mr-6">
          <h2 className="font-bold mb-2">Filtri</h2>
          <form>
            <div>
              <label>Città</label>
              <input name="city" className="border p-1 w-full" />
            </div>
            <div>
              <label>Prezzo max</label>
              <input name="maxPrice" type="number" className="border p-1 w-full" />
            </div>
            <button className="bg-blue-600 text-white px-2 py-1 mt-2 w-full">Applica</button>
          </form>
        </aside>
        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {studios.map(studio => (
            <Link key={studio.id} href={`/studio/${studio.id}`} className="block bg-white p-4 shadow rounded">
              <img src={Array.isArray(studio.images) ? studio.images[0] : '/img/milano1.jpg'} className="w-full h-32 object-cover rounded" />
              <h3 className="font-bold">{studio.name}</h3>
              <div>{studio.city}</div>
              <div>€{studio.pricePerHour}/h</div>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}