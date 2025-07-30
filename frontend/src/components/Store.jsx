import Navbar from "./Navbar";

function Store() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white px-4">
        <Navbar/>
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">🛍️ Store</h1>
        <p className="text-xl md:text-2xl text-gray-300">Coming Soon...</p>
      </div>
    </div>
  );
}

export default Store;
