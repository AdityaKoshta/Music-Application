import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  return (
    
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg2.jpg')" }}
    >
       <Navbar />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white p-6 rounded-xl">
          <h1 className="text-5xl font-bold">Welcome to Music World 🎧</h1>
          <p className="mt-4 text-lg">Explore the freshest albums, remixes, and vibes.</p>
          <div className="mt-6 flex gap-4 justify-center">
            <button
              onClick={() => navigate("/allPost")}
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
            >
              Explore
            </button>
            <button onClick={() => navigate("/about")} className="border border-white px-6 py-2 rounded-full hover:bg-white/10 transition-all duration-300">
              About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
