import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Carrusel=()=>{

    const [searchValue, setSearchValue]=useState('');
    const navigate=useNavigate();
    const handleInputChange=(e)=>{
        setSearchValue(e.target.value);
    };
    const handleKeyDown=(e)=>{
        if(e.key=== 'Enter'){
            navigate(`/search?search=${encodeURIComponent(searchValue)}`);
        }
    }
    const handleClick=()=>{
        navigate(`/search?search=${encodeURIComponent(searchValue)}`);
    }

    return(
        <div className="container">
                    <div id="caja_primera" className="p-4 p-md-3 position-relative">
    
                        <div id="carouselExampleIndicators" className="carousel slide w-100" data-bs-ride="carousel" style={{minWidth: '350px'}}>
                            <div className="carousel-indicators" style={{marginBottom: '0.2rem'}}>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner" style={{borderRadius: '1rem'}}>
                                <div className="carousel-item active">
                                <img src="https://i.redd.it/zyx1ckankka31.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="https://c4.wallpaperflare.com/wallpaper/372/311/679/xbox-one-4k-ori-and-the-will-of-the-wisps-pc-wallpaper-preview.jpg" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9868d92e-3d4d-4ef5-bb0d-fcef4e2b6ef7/dhr8kzg-34c77e28-e513-4116-b6b4-0fe1973e46f3.jpg/v1/fill/w_1280,h_719,q_75,strp/stardew_valley_night_nature_wallpaper_by_sallystinkerton_dhr8kzg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk4NjhkOTJlLTNkNGQtNGVmNS1iYjBkLWZjZWY0ZTJiNmVmN1wvZGhyOGt6Zy0zNGM3N2UyOC1lNTEzLTQxMTYtYjZiNC0wZmUxOTczZTQ2ZjMuanBnIiwiaGVpZ2h0IjoiPD03MTkiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC85ODY4ZDkyZS0zZDRkLTRlZjUtYmIwZC1mY2VmNGUyYjZlZjdcL3NhbGx5c3RpbmtlcnRvbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.HMz05ByFLhYO_GdNCM1kfebmJvZ8mhz8OkTpzFJMRuk" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{width:'3rem'}}>
                                <span className="carousel-control-prev-icon" aria-hidden="true" style={{marginLeft: '-30px'}}></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{width:'3rem'}}>
                                <span className="carousel-control-next-icon" aria-hidden="true" style={{marginLeft: '-30px'}}></span>
                                <span className="visually-hidden">Next</span>
                            </button>

                            <div className="d-flex flex-column align-items-start justify-content-end p-4 pb-10 position-absolute w-100 h-100" style={{overflow:'auto', textWrap: 'balance', top: 0, left: 0}} >
                                <div id="caja_titulo" className="d-flex flex-column text-start" style={{gap: '0.5rem'}}>
                                        <h1 className="text-white display-4 font-weight-bolder responsive_text">
                                        Welcome to MYGAMELOG <br/> Track your gaming life
                                        </h1>
                                        <h2 className="text-white custom-h2">
                                        Create and share lists of games, review and rate all of them. 
                                        </h2>
                                </div>
                                <label className="d-flex flex-column" style={{minWidth: '10rem', height: '3.5rem', width: '75%', maxWidth: '480px'}}>
                                    <div id="label_home" className="d-flex w-100 h-100 rounded">
                                        <div className="d-flex align-items-center justify-content-center" 
                                        style={{color: '#9393c8', borderColor: '#343465', backgroundColor: '#1a1a32', paddingLeft: '15px', borderTopLeftRadius: '0.75rem', borderBottomLeftRadius: '0.75rem', borderRight: 'none'}}
                                        data-icon="MagnifyingGlass" data-size="20px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z">                                                
                                                </path>
                                            </svg>
                                        </div>
                                        <input type="search" placeholder="Search for a game" className="border-0 text-white custom-input" style={{backgroundColor: '#1a1a32', color: '#9393c8', borderRadius: 0, width: '100%', minWidth: '10rem'}} aria-label="Search for a game" value={searchValue} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
                                        <div className="d-flex align-items-center justify-content-center border-0 pe-1" style={{backgroundColor: '#1a1a32', borderTopRightRadius: '0.75rem', borderBottomRightRadius: '0.75rem'}}>
                                            <button id="btn-search" type="button" className="d-flex align-items-center justify-content-center fw-bold text-white" style={{borderRadius: '0.5rem', height: '2.5rem', paddingLeft: '1rem', paddingRight: '1rem', minWidth: '6rem', maxWidth: '480px', cursor: 'pointer', overflow: 'hidden'}} onClick={handleClick}>
                                                <span className="text-truncate">Search</span>
                                            </button>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
        </div>
    )
}
export default Carrusel