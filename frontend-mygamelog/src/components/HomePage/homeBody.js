import React from "react";
import MainBody from "./homeBodyMain";

const HomeBody=()=>{
    return(
        <div className="position-relative d-flex flex-column w-100 min-vh-100 " style={{background: 'rgb(21,17,34)', background: 'linear-gradient(94deg, rgba(21,17,34,1) 0%, rgba(45,12,55,1) 24%, rgba(28,20,77,1) 64%, rgba(14,7,24,1) 100%)', overflowX: 'hidden', fontFamily: "'Be Vietnam Pro', 'Noto Sans', sans-serif"}}>
            <div className="container-fluid d-flex flex-column h-100">
                
                <MainBody/>
                
            </div>
        </div>
    )
}

export default HomeBody;