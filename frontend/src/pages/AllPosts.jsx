import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function AllPosts() {
  const [remixes, setRemixes] = useState([]);

  useEffect(() => {
    const fetchRemixes = async () => {
      try {
        const res = await axios.get("http://localhost:3000/remix");
        setRemixes(res.data);
      } catch (error) {
        console.error("Failed to fetch remixes:", error);
      }
    };

    fetchRemixes();
  }, []);

  return (
    <div
  className="min-h-screen text-white px-4 py-10 pt-32"
  style={{
    backgroundImage: 'url("/assets/test2.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      <Navbar/>
      <div className="max-w-6xl">
        <h1 className="text-4xl font-bold mb-10">All Remix Posts</h1>

        {remixes.length === 0 ? (
          <p className="text-center text-gray-400">No remixes available yet.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {remixes.map((remix) => (
              <div
                key={remix._id}
                className="bg-white/10 p-4 rounded-lg shadow-md hover:scale-101 transition-transform duration-300"
              >
                <img
                  src={`http://localhost:3000${remix.imageUrl}`}
                  alt={remix.title}
                  className="w-cover h-45 object-cover rounded-md mb-4"
                />

                <h2 className="text-xl font-semibold">{remix.title}</h2>
                <p className="text-gray-300 mb-1">by {remix.artist}</p>
                <p className="text-xs text-gray-400 italic mb-2 capitalize">
                  Category: {remix.category}
                </p>

                {/* Music player */}
                <audio controls className="w-full mb-2">
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
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded-full hover:bg-blue-700 transition"
                >
                  ⬇️ Download
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AllPosts;
