export default function OwnerDashboard() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Dashboard Proprietario</h1>
      <div>
        <h2 className="font-semibold">Le tue disponibilità</h2>
        {/* Disponibilità e gestione slot */}
      </div>
      <div>
        <h2 className="font-semibold mt-4">Prenotazioni ricevute</h2>
        {/* Prenotazioni degli studi */}
      </div>
      <div>
        <h2 className="font-semibold mt-4">Guadagni</h2>
        {/* Statistiche */}
      </div>
    </div>
  );
}