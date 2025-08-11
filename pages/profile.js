export default function Profile() {
  // Puoi integrare le chiamate API per visualizzare prenotazioni/recensioni utente
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Il mio profilo</h1>
      <div>
        <h2 className="font-semibold">Prenotazioni</h2>
        {/* Lista prenotazioni */}
      </div>
      <div>
        <h2 className="font-semibold mt-4">Recensioni lasciate</h2>
        {/* Lista recensioni */}
      </div>
    </div>
  );
}