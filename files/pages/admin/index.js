import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminPanel() {
  const [stats, setStats] = useState({});
  useEffect(() => {
    axios.get('http://localhost:4000/admin/stats', {
      headers: { Authorization: 'Bearer token_admin' } // stub: token admin
    }).then(res => setStats(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Admin Panel</h1>
      <div>Utenti: {stats.users}</div>
      <div>Studi: {stats.studios}</div>
      <div>Prenotazioni: {stats.bookings}</div>
    </div>
  );
}