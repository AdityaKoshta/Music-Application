import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function GfxWork() {
  return (
    <div className="bg-black text-white py-10 px-4 min-h-screen">
        <Navbar/>
      <h1 className="text-4xl font-bold text-center mb-10 mt-20">🎨 GFX Work</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <img src="/assets/gfxwork/work1.jpeg" alt="Work 1" className="w-full rounded-lg" />
        <img src="/assets/gfxwork/work2.jpeg" alt="Work 2" className="w-full rounded-lg" />
        <img src="/assets/gfxwork/work3.jpeg" alt="Work 3" className="w-full rounded-lg" />
        <img src="/assets/gfxwork/work4.jpeg" alt="Work 4" className="w-full rounded-lg" />
        <img src="/assets/gfxwork/work5.jpeg" alt="Work 5" className="w-full rounded-lg" />
        <img src="/assets/gfxwork/work6.jpeg" alt="Work 6" className="w-full rounded-lg" />
      </div>

      <Footer/>
    </div>
  );
}

export default GfxWork;
