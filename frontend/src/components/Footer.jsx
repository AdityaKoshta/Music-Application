function Footer() {
    return(
    
        <div className="mt-16 flex flex-col items-center justify-center">
            
        {/* Logo and Social Links */}
        <div className="mt-16 flex flex-col items-center justify-center">
          <img
            src="/assets/RT_GFX_LOGO.png"
            alt="RT GFX Logo"
            className="w-32 md:w-40 mb-8"
          />

          <div className="flex flex-wrap justify-center gap-10">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/facebook.png"
                alt="Facebook"
                className="w-14 md:w-16 hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/instagram.png"
                alt="Instagram"
                className="w-14 md:w-16 hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/youtube.png"
                alt="YouTube"
                className="w-14 md:w-16 hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>
        
        </div>
        </div>
    )
}

export default Footer;