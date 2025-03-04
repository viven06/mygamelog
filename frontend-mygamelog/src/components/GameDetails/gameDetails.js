import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GameDetails = () => {
    const { gameName } = useParams();
    const [gameDetails, setGameDetails] = useState(null);
    const userId= localStorage.getItem('userId');

    useEffect(()=>{
        const fetchGameDetails = async () =>{
            try{
                const response= await axios.get(`http://localhost:8000/games/${gameName}`);
                setGameDetails(response.data);
            }
            catch(error){
                console.error('Error al obtener los detalles del juego',error);
            }
        };
        fetchGameDetails();
    },[gameName]);

    const addToList =async (tipo)=>{
        try{
            const response = await axios.post('http://localhost:8000/lists/addgame',{
                juego_id: gameDetails.juego_id,
                tipo,
                id_usuario: userId
            });
            alert(response.data.message);
        }
        catch(error){
            console.error('Error al agregar juego a la lista:', error); 
            alert('Error al agregar juego a la lista.');
        }
    }

    return (
    <div className="position-relative d-flex flex-column w-100 min-vh-100 " style={{background: 'rgb(21,17,34)', background: 'linear-gradient(94deg, rgba(21,17,34,1) 0%, rgba(45,12,55,1) 24%, rgba(28,20,77,1) 64%, rgba(14,7,24,1) 100%)', overflowX: 'hidden', fontFamily: "'Be Vietnam Pro', 'Noto Sans', sans-serif"}}>
        <div className="container-fluid d-flex justify-content-center h-100">
            <div class="text-white text-center rounded p-2 bajar_elemento" style={{backgroundColor:'#403a45', width:'65rem'}}>
                {gameDetails ? (
                    <>
                        <h1>{gameDetails.titulo}</h1>
                        <p><strong>Release Date:</strong> {gameDetails.fecha_lanzamiento}</p>
                        <p><strong>Platform:</strong> {gameDetails.plataforma}</p>
                        <p><strong>Synopsis:</strong> {gameDetails.sinopsis}</p>

                        <div> 
                            <button onClick={() => addToList('Completed')} 
                                onMouseOver={(e)=>e.currentTarget.style.backgroundColor="#777c85"}
                                onMouseOut={(e)=>e.currentTarget.style.backgroundColor="#e3e3e3"}>Agregar a Completed</button> 
                            <button onClick={() => addToList('Playing')}
                                onMouseOver={(e)=>e.currentTarget.style.backgroundColor="#777c85"}
                                onMouseOut={(e)=>e.currentTarget.style.backgroundColor="#e3e3e3"}>Agregar a Playing</button> 
                            <button onClick={() => addToList('Plan to Play')}
                                onMouseOver={(e)=>e.currentTarget.style.backgroundColor="#777c85"}
                                onMouseOut={(e)=>e.currentTarget.style.backgroundColor="#e3e3e3"}>Agregar a Plan to Play</button>
                        </div>
                    </>
                ):(
                    <p>Loading the game's info...</p>
                )}
            </div>
        </div>
    </div>
    );
};

export default GameDetails;
