import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function SingleRemix() {
  const [remixes, setRemixes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/remix?category=single")
      .then((res) => setRemixes(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 min-h-screen bg-black text-white pt-30">
      <Navbar/>
      <h1 className="text-3xl font-bold mb-4">🎧 Single Remixes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {remixes.map((remix) => (
          <div key={remix._id} className="bg-white/10 p-4 rounded shadow text-white hover:scale-101">
            <img
              src={`http://localhost:3000${remix.imageUrl}`}
              alt={remix.title}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h2 className="text-xl font-semibold">{remix.title}</h2>
            <p className="text-sm text-gray-300 mb-2">{remix.artist}</p>

            {/* Audio player */}
            <audio controls className="w-full mt-2">
              <source
                src={`http://localhost:3000${remix.musicUrl}`}
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>

            {/* Download button */}
            <a
              href={`http://localhost:3000${remix.musicUrl}`}
              download
              className="inline-block mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleRemix;
