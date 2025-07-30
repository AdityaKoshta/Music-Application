import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function AlbumRemix() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/remix?category=album")
      .then((res) => setSongs(res.data))
      .catch((err) => console.error("Failed to fetch album remixes:", err));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 pt-30">
      <Navbar/>
      <h1 className="text-4xl font-bold mb-8 ">🎶 Album Remixes</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {songs.map((song) => (
          <div
            key={song._id}
            className="bg-white/10 p-4 rounded-lg shadow-md hover:scale-101 transition-transform duration-300"
          >
            <img
              src={`http://localhost:3000${song.imageUrl}`}
              alt={song.title}
              className="w-full h-52 object-cover rounded-md mb-4"
            />

            <h2 className="text-xl font-semibold">{song.title}</h2>
            <p className="text-gray-300 mb-2">by {song.artist}</p>

            {/* Music player */}
            <audio controls className="w-full mt-2">
              <source
                src={`http://localhost:3000${song.musicUrl}`}
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>

            {/* Download button */}
            <a
              href={`http://localhost:3000${song.musicUrl}`}
              download
              target="_blank"
              rel="noreferrer"
              className="block mt-3 bg-white text-black text-center px-4 py-2 rounded-full hover:bg-gray-200 transition"
            >
              ⬇ Download
            </a>
          </div>
        ))}
      </div>

      {songs.length === 0 && (
        <p className="text-center text-gray-400 mt-20 text-lg">
          No Album Remixes available yet.
        </p>
      )}
    </div>
  );
}

export default AlbumRemix;
