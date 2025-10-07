

function Nav({ setNavOpen }) {
  return (
  <div className="absolute top-0 right-0 h-screen w-full md:w-1/3 z-50 bg-black bg-opacity-60 flex flex-col">
      <img src="/images/logoForWebsite.png" alt="Logo" className="w-3/4 mx-auto mb-4" />
        <nav className="flex-growoverflow-y-auto">
            <ul className=" text-center text-2xl">  
                {/* <li className="py-2 hover:bg-white hover:bg-opacity-20">
                    <a href="#home" className="text-cemter text-white ">HOME</a>
                </li>   
                <li className="py-2 hover:bg-white hover:bg-opacity-20">   
                    <a href="#about" className="text-cemter text-white ">ABOUT</a>

                </li>
                <li className="py-2 hover:bg-white hover:bg-opacity-20">
                    <a href="#music" className="text-cemter text-white ">MUSIC</a>
                </li>
                <li className="py-2 hover:bg-white hover:bg-opacity-20">
                    <a href="#tour" className="text-cemter text-white ">TOUR</a>
                </li> */}
                <li className="py-2 hover:bg-white hover:bg-opacity-20">
                    <a href="mailto:silverlizmusic@gmail.com" className="text-cemter text-white ">CONTACT</a>
                </li>
                <li className="py-2 hover:bg-white hover:bg-opacity-20">
                    <a href="https://linktr.ee/silverliz" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">LINKTREE</a>
                </li>
                <li className="py-2 hover:bg-white hover:bg-opacity-20" onClick={() => setNavOpen(false)}>
                    <p className="text-white hover:underline">CLOSE</p>
                </li>
            </ul>
                </nav>
                        <div className="flex justify-center gap-6 mt-6">
                            {/* Instagram */}
                            <a href="https://instagram.com/silver__liz" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg className="w-8 h-8 text-white hover:text-pink-400" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                            </a>
                            {/* Bandcamp */}
                            <a href="https://silverliz.bandcamp.com" target="_blank" rel="noopener noreferrer" aria-label="Bandcamp">
                                <svg className="w-8 h-8 text-white hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22.5 3.5H7.5L1.5 20.5h15l6-17z"/></svg>
                            </a>
                            {/* YouTube */}
                            <a href="https://www.youtube.com/@silverlizzz" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <svg className="w-8 h-8 text-white hover:text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.633 3.5 12 3.5 12 3.5s-7.633 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 7.939 0 12 0 12s0 4.061.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.367 20.5 12 20.5 12 20.5s7.633 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 16.061 24 12 24 12s0-4.061-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z"/></svg>
                            </a>
                            {/* Spotify */}
                            <a href="https://open.spotify.com/artist/063uvG0luqeuz7qjH8QiQQ?si=axM8L1oBQYie2bexazdCFw" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                                <svg className="w-8 h-8 text-white hover:text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.243 14.314a.75.75 0 0 1-1.03.243c-2.82-1.73-6.38-2.12-10.09-1.13a.75.75 0 1 1-.34-1.46c4.09-1.01 7.98-.57 11.09 1.24a.75.75 0 0 1 .37 1.11zm1.13-2.57a.75.75 0 0 1-1.03.24c-3.23-1.98-8.15-2.16-11.57-1.16a.75.75 0 1 1-.34-1.46c3.77-1.01 9.04-.8 12.57 1.32a.75.75 0 0 1 .37 1.06zm.99-2.61c-3.7-2.23-9.82-2.43-13.22-1.31a.75.75 0 1 1-.34-1.46c3.77-1.01 10.36-.78 14.22 1.51a.75.75 0 0 1-.66 1.26z"/></svg>
                            </a>
                            {/* SoundCloud */}
                            <a href="https://soundcloud.com/silverliz" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud">
                                <svg className="w-8 h-8 text-white hover:text-orange-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 10.5c-.2 0-.4 0-.6.1-.2-2.2-2.1-3.9-4.3-3.9-.7 0-1.4.2-2 .5-.2.1-.3.3-.3.5v7.2c0 .3.2.5.5.5h6.7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2zm-8.2 6.2c.3 0 .5-.2.5-.5v-6.7c0-.3-.2-.5-.5-.5s-.5.2-.5.5v6.7c0 .3.2.5.5.5zm-1.5-.5v-6.7c0-.3-.2-.5-.5-.5s-.5.2-.5.5v6.7c0 .3.2.5.5.5s.5-.2.5-.5zm-1.5-.5v-6.7c0-.3-.2-.5-.5-.5s-.5.2-.5.5v6.7c0 .3.2.5.5.5s.5-.2.5-.5zm-1.5-.5v-6.7c0-.3-.2-.5-.5-.5s-.5.2-.5.5v6.7c0 .3.2.5.5.5s.5-.2.5-.5zm-1.5-.5v-6.7c0-.3-.2-.5-.5-.5s-.5.2-.5.5v6.7c0 .3.2.5.5.5s.5-.2.5-.5zm-1.5-.5v-6.7c0-.3-.2-.5-.5-.5s-.5.2-.5.5v6.7c0 .3.2.5.5.5s.5-.2.5-.5z"/></svg>
                            </a>
                            {/* Email */}
                            <a href="mailto:silverlizmusic@gmail.com" aria-label="Email">
                                <svg className="w-8 h-8 text-white hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/></svg>
                            </a>
                </div>
            </div>
        );
    }

export default Nav;