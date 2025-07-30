import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./pages/Home";
import Store from "./components/Store";
import About from "./pages/About";
import AllPosts from "./pages/AllPosts";
import AdminUpload from "./pages/AdminUpload";
import GfxWork from "./pages/GfxWork";
import SingleRemix from "./pages/SingleRemix";
import AlbumRemix from "./pages/AlbumRemix";

function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gfxWork" element={<GfxWork />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/allPost" element={<AllPosts />} />        
        <Route path="/admin/upload" element={<AdminUpload />} />
        <Route path="/remixes/single" element={<SingleRemix />} />
        <Route path="/remixes/album" element={<AlbumRemix />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
