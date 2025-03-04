import React, {useEffect,useState} from "react";
import axios from'axios';


const MyLists=({isLoggedIn})=>{
    const [listas, setListas]=useState([]);
    const userId= localStorage.getItem('userId');
    const [usuario,setusuario]=useState({usuario:''});
    const [updateLists, setUpdateLists]=useState(false);
    const [scores, setScores]=useState({});
    
    useEffect(()=>{
        if (isLoggedIn){
            const fetchUserList = async ()=>{
                try{
                    const response = await axios.get("http://localhost:8000/lists/user-lists",{
                        params: {id_usuario: userId}
                    });
                    setListas(response.data.listas || []);
                    setusuario(response.data.usuario);

                    const initialScores = {}; 
                    response.data.listas.forEach(lista => { 
                        lista.Juegos.forEach(juego => { 
                            initialScores[juego.juego_id] = juego.JuegoLista.puntuacion || ''; 
                        }); 
                    });
                    setScores(initialScores);
                }
                catch(error){
                    console.error('Error al obtener las listas del usuario',error);
                }
            };
            fetchUserList();
        }
    },[isLoggedIn, updateLists]);
    
    const handleDeleteGame = async (juego_id, id_lista)=>{
        try{
            const response=await axios.delete('http://localhost:8000/lists/delete-game-from-list',{
                data:{
                    juego_id,
                    id_lista
                }
            });
            if (response.status === 200) { 
                setUpdateLists(!updateLists); 
            } else { 
                console.error('No se pudo eliminar el juego de la lista'); 
            }

        }
        catch(error){
            console.error('Error al eliminar juego de la lista',error);
        }
    };

    const handleScoreChange = async (juego_id, puntuacion)=>{
        try{
            const response = await axios.put('http://localhost:8000/lists/update-score',{
                id_usuario: userId,
                juego_id,
                puntuacion
            });

            if (response.status === 200) {
                setUpdateLists(!updateLists);
            }
            else{
                console.error('No se pudo actualizar  la puntuacion del juego');
            }
        }
        catch(error){
            console.error('Error al actualizar la puntuación del juego:', error.response ? error.response.data.details : error.message);
        }
    };

    const handleBlur = (e, juego_id) =>{
        const newValue = e.target.value;
        handleScoreChange(juego_id,newValue);
    };

    const handleInputChange = (e, juego_id) => { 
        const newValue = e.target.value; 
        setScores({ 
            ...scores, 
            [juego_id]: newValue 
        }); 
    };

    return(
        <div className="position-relative d-flex flex-column w-100 min-vh-100 " style={{backgroundColor: 'rgb(21,17,34)', background: 'linear-gradient(94deg, rgba(21,17,34,1) 0%, rgba(45,12,55,1) 24%, rgba(28,20,77,1) 64%, rgba(14,7,24,1) 100%)', overflowX: 'hidden', fontFamily: "'Be Vietnam Pro', 'Noto Sans', sans-serif"}}>
            <h1 className="text-center text-white bajar_elemento">{usuario.usuario}'s Lists</h1>
            <div className="container-fluid d-flex justify-content-center h-100 mt-2 lists-container" >
                {Array.isArray(listas) && listas.length > 0 ? listas.map((lista) => ( 
                    <div key={lista.id_lista} className="card my-3 text-white mx-1 list-card" style={{backgroundColor:'#1a1a32',width:'32%'}}> 
                        <div className="card-body"> 
                            <h5 className="card-title text-center">{lista.tipo}</h5> 
                            <ul className="list-group p-y-2" style={{borderRadius:'0', backgroundColor:'transparent'}}> 
                                {lista.Juegos.map((juego) => ( 
                                    <li className="list-group-item text-white d-flex justify-content-between" key={juego.juego_id} style={{borderLeft:'none', borderRight:'none', borderTopColor:'#403a45', borderBottomColor:"#403a45", borderRadius:'0', backgroundColor: '#1a1a32' }}> 
                                        <button onClick={() => handleDeleteGame(juego.juego_id, lista.id_lista)} 
                                        style={{ marginRight: '1rem', border: 'none',borderRadius:'20%', cursor: 'pointer',background:'transparent' }} >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                            </svg>    
                                        </button>
                                        {juego.titulo}  
                                        <input type="number" 
                                            min="0" 
                                            max="10" 
                                            value={scores[juego.juego_id]} 
                                            onChange={(e)=> handleInputChange(e, juego.juego_id)}
                                            onBlur={(e)=> handleBlur(e, juego.juego_id)} 
                                            style={{marginLeft:'4px',width:'3.6rem', backgroundColor:'#9e9eba', borderRadius:'15%' }}
                                        /> 
                                    </li> 
                                ))} 
                            </ul> 
                        </div> 
                    </div> 
                )) : <p>No hay listas disponibles.</p>}  
            </div>
        </div>
    );
};
export default MyLists;