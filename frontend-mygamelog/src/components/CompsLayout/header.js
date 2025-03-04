import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useModal } from "../Login_Register/ModalContext";



const Header=({isLoggedIn, logout})=>{
    const { showModal } = useModal();
    const navigate= useNavigate();

    const handleMyListsClick = () => { 
        if (isLoggedIn) { 
            navigate('/mylists'); // Redirigir a My Lists si está autenticado 
        } 
        else { showModal('auth'); // Mostrar modal de autenticación si no está autenticado 
        }
    };

    return(
        <header className="navbar fixed-top d-flex justify-content-between align-items-center border-bottom border-dark px-3 py-2" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)'}}>
            <div id="header-home" className="d-flex align-items-center text-white" style={{gap: '1rem' }}>
                <div style={{height: '1rem'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-controller" viewBox="0 0 16 16">
                        <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z"/>
                        <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27"/>
                    </svg> 
                </div>
                <Link to="/" className="text-decoration-none">
                    <h1 onMouseOver={(e) => e.currentTarget.style.color = 'lightgray'} onMouseOut={(e) => e.currentTarget.style.color = 'white'} className="h5 fw-bolder mt-2" style={{ color: 'white', letterSpacing: '-0.015em' }}>MyGameLog</h1>
                </Link>
            </div>
            
            <div id="header-buttons" className="d-flex flex-grow-1" style={{ gap: '0.5rem' }}>
                <div className="d-flex align-items-center" style={{gap: '1rem' }}>
                    <button className="text-white small fw-medium text-decoration-none d-flex align-items-center justify-content-center overflow-hidden rounded-3" 
                        style={{minWidth: '84px', maxWidth: '480px', height: '2.5rem', paddingLeft: '1rem', paddingRight: '1rem', backgroundColor: '#572a82'}} 
                        onClick={handleMyListsClick} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#411f61'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#572a82'}> 
                        My Lists 
                    </button>
                </div>

                <div className="d-flex align-items-center" style={{ gap: '0.5rem' }}>
                    <Link to="/search" className="d-flex align-items-center small fw-bolder rounded-3 h-10 px-4 text-white bg-custom-purple text-decoration-none" style={{backgroundColor: '#7b2e97', height: '2.5rem'}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#562069'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#7b2e97'}>Search Game</Link>
                </div>

                <div className="d-flex" style={{ gap: '0.5rem' }}>
                    {isLoggedIn ? (
                        <button className="btn d-flex align-items-center overflow-hidden text-white" style={{borderRadius:'50%', width: '40px', height: '40px', backgroundColor: '#6116a8'}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#3a0d64'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6116a8'} onClick={logout}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                            </svg>
                        </button>
                    ) : (
                        <button className="btn d-flex align-items-center overflow-hidden text-white" style={{borderRadius:'50%', Width: '40px', height: '40px', backgroundColor: '#6116a8'}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#3a0d64'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6116a8'} onClick={() => showModal('auth')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" >
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header;