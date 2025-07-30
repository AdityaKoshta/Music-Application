import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function About() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-30 ">
      <Navbar/>
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>

        {/* Description */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-200">
          Welcome to <span className="text-white font-semibold">Music World</span>, a stylish and interactive music
          platform where users can discover and download fresh albums, remixes, and creative
          audio content—all without needing to log in or register.
          <br /><br />
          This is a real-time music platform where only the <strong>Admin</strong> can upload albums. Each album includes a cover
          photo and a downloadable music file, allowing public users to instantly download
          tracks with a single click. Whether you're into electronic beats, chilled remixes, or
          unique indie tracks, Music World brings all types of music into one creative space.
          <br /><br />
          Built using modern technologies like <span className="text-white font-semibold">React, Tailwind CSS</span>, and
          <span className="text-white font-semibold"> Cloudinary</span>, this platform ensures a fast, responsive, and visually
          engaging experience for all users across all screen sizes.
        </p>

        {/* GFX Section */}
        <h2 className="text-4xl md:text-5xl font-bold mt-16 mb-6">🎨 About GFX Work</h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-200">
          The <strong>GFX Work</strong> section is a creative gallery of visual art, album designs,
          posters, and banners that reflect the visual storytelling side of music. GFX stands
          for <strong>Graphics Effects</strong>—a space where design meets sound. Whether it’s an album
          cover or a promotional poster, GFX helps tell the story behind the music.
          <br /><br />
          Artists and designers can showcase their style through this section, promoting not just
          sound but emotions, vibes, and energy through colors, textures, and visuals.
        </p>

        {/* Responsive Contact Image */}
        <div className="mt-10">
          <img
            src="/assets/gfxwork/contact.jpeg"
            alt="Contact"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          />
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default About;
