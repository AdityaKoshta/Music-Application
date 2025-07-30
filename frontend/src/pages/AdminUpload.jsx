// AdminUpload.jsx
import axios from "axios";
import { useState } from "react";

function AdminUpload() {
  const [form, setForm] = useState({
    title: "",
    artist: "",
    category: "single",
  });
  const [image, setImage] = useState(null);
  const [music, setMusic] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !music) {
      return alert("Please select both an image and a music file.");
    }

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("artist", form.artist);
    fd.append("category", form.category);
    fd.append("image", image);
    fd.append("music", music);

    try {
      setLoading(true);
      await axios.post("http://localhost:3000/remix/upload", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Upload successful!");
      setForm({ title: "", artist: "", category: "single" });
      setImage(null);
      setMusic(null);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/10 p-6 rounded-lg flex flex-col gap-4 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-2 text-center">🎵 Admin Upload</h2>

        <input
          type="text"
          placeholder="Title"
          className="p-2 rounded bg-white text-black"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Artist"
          className="p-2 rounded bg-white text-black"
          value={form.artist}
          onChange={(e) => setForm({ ...form, artist: e.target.value })}
          required
        />

        <select
          className="p-2 rounded bg-white text-black"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option value="single">Single Remix</option>
          <option value="album">Album Remix</option>
        </select>

        <p>Image :</p>
        <input
          type="file"
          accept="image/*"
          className="text-sm"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <p>Audio :</p>
        <input
          type="file"
          accept="audio/*"
          className="text-sm"
          onChange={(e) => setMusic(e.target.files[0])}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}

export default AdminUpload;
