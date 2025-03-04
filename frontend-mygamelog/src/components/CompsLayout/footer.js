import React from "react";
import danielrueda from "../../Imagenes/fotodanielrueda.jpeg";
import danielleal from "../../Imagenes/fotodanielleal.jpeg";
import kevingarcia from "../../Imagenes/fotokevin.jpeg";
import josequintero from "../../Imagenes/fotojosequintero.jpg"

const Footer=()=>{
    return(
        <footer className="text-light py-4" style={{backgroundColor:'#1a1a32'}}>
            <div className="container">
                <div className="row">
                    {/* <!-- Contact Cards Column --> */}
                    <div className="col-md-8 mr-6 pe-4">
                        <h1 className="mb-3 display-6 text-center">Our Team</h1>
                        <div className="row">    
                            {/* <!-- Team Member 1 --> */}
                            <div className="col-md-3 mb-2">
                                <div className="card bg-secondary text-white text-center">
                                    <img src={danielrueda} alt="img" className="rounded-circle mx-auto d-block mt-3" style={{width: '100px', height: '100px'}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Daniel Rueda</h5>
                                        <p >Developer</p>
                                        <p style={{fontSize: '0.65rem'}}>daniesteban1006@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                    
                            {/* <!--Team Member 2 --> */}
                            <div className="col-md-3 mb-2">
                                <div className="card bg-secondary text-white text-center">
                                    <img src={josequintero} alt="img" className="rounded-circle mx-auto d-block mt-3" style={{width: '100px', height: '100px'}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Jose Quintero</h5>
                                        <p >Developer</p>
                                            <p style={{fontSize: '0.6rem'}}>josequintero020730@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                    
                            {/* <!-- Team Member 3 --> */}
                            <div className="col-md-3 mb-2">
                                <div className="card bg-secondary text-white text-center">
                                    <img src={danielleal} alt="img" className="rounded-circle mx-auto d-block mt-3" style={{width: '100px', height: '100px'}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Daniel Leal</h5>
                                        <p >Developer</p>
                                        <p style={{fontSize: '0.65rem'}}>daniellealaya102@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                    
                            {/* <!-- Team Member 4 --> */}
                            <div className="col-md-3 mb-2">
                                <div className="card bg-secondary text-white text-center">
                                    <img src={kevingarcia} alt="img" className="rounded-circle mx-auto d-block mt-3" style={{width: '100px', height: '100px'}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Kevin García</h5>
                                        <p >Developer</p>
                                        <p style={{fontSize: '0.65rem'}}>kefagacha@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Social Links Column --> */}
                    <div id="social_links_column" className="col-md-3 mb-2 ml-6">
                        <h5 className="fs-1 mb-3 text-center">Social Links</h5>
                        <ul className="text-center social_links_list" >
                            <li className="social_links">
                                <a href="https://www.facebook.com"  target="_blank">
                                    Facebook
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16" style={{paddingLeft:'5px'}}>
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="social_links">
                                <a href="https://x.com/home?lang=es"  target="_blank">
                                    Twitter
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16" style={{paddingLeft:'5px'}}>
                                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="social_links">
                                <a href="https://www.reddit.com"  target="_blank">
                                    Reddit
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-reddit" viewBox="0 0 16 16" style={{paddingLeft:'5px'}}>
                                        <path d="M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z"/>
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="social_links">
                                <a href="https://discord.com"  target="_blank">
                                    Discord
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16" style={{paddingLeft:'5px'}}>
                                        <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;