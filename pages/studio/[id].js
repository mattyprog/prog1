import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function StudioDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [studio, setStudio] = useState(null);

  useEffect(() => {
    if (id)
      axios.get(`http://localhost:4000/studios/${id}`).then(res => setStudio(res.data));
  }, [id]);

  if (!studio) return <div>Loading...</div>;

  // Per immagini/array JSON demo
  let images = studio.images;
  if (typeof images === 'string') {
    try { images = JSON.parse(images); } catch {}
  }
  let equipment = studio.equipment;
  if (typeof equipment === 'string') {
    try { equipment = JSON.parse(equipment); } catch {}
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <img src={images?.[0] || '/img/milano1.jpg'} className="w-full h-64 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-2">{studio.name}</h1>
      <div>{studio.city} - {studio.address}</div>
      <div className="my-2">Attrezzatura: {equipment?.join(', ')}</div>
      <div className="my-2">€{studio.pricePerHour}/ora</div>
      <div>{studio.policy}</div>
      {/* Calendario semplificato */}
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">Prenota ora</button>
    </div>
  );
}