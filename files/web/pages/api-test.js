import { useState } from "react";
import axios from "axios";

export default function ApiTest() {
  const [result, setResult] = useState("");
  const [city, setCity] = useState("");

  async function testStudios() {
    const res = await axios.get("http://localhost:4000/studios", { params: { city } });
    setResult(JSON.stringify(res.data, null, 2));
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Test API: Studios</h1>
      <input
        className="border p-2 mr-2"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Città"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={testStudios}>
        Cerca Studios
      </button>
      <pre className="bg-gray-100 p-4 mt-4 rounded">{result}</pre>
    </div>
  );
}