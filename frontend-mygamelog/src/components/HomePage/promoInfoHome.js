import React from "react";

const PromoInfoHome=()=>{
    return(
        <div className="d-flex flex-column @container" style={{gap: '2.5rem', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '2.5rem', paddingBottom: '2.5rem'}}>
            <div className="d-grid" style={{gridTemplateColumns: 'repeat(1, minmax(158px, 1fr))', gap: '1rem'}}>
                <div className="container-fluid gradient_background" style={{padding: '30px', backgroundColor: '#1c1e29', color: 'white', borderRadius: '10px', maxWidth: '100%'}}>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <h2 className="ml-6" style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Create Lists</h2>
                            <p className="ml-6" style={{fontSize: '0.9rem', marginTop: '10px'}}>Keep track of the games you've played, are playing or want to play.</p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center" >
                            <img src="https://machinations.io/wp-content/uploads/2023/02/Coral_found_imagery_collage_the_history_of_video_games_pixel_ar_a6ee6dd8-fbe9-4d59-85eb-81450d18e08b-1024x1024.png" alt="Games List Interfaces" className="img-fluid img_responsive" style={{borderRadius: '10px', boxShadow: '0 0 40px rgb(62, 3, 133)', maxHeight: '300px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '1rem'}}/>
                        </div>
                    </div>
                </div>

                <div className="container-fluid gradient_background" style={{padding: '30px', backgroundColor: '#1c1e29', color: 'white', borderRadius: '10px', maxWidth: '100%'}}>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <h2 className="ml-6" style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Rate Games</h2>
                            <p className="ml-6" style={{fontSize: '0.9rem', marginTop: '10px'}}>Give them a score from 0 to 10</p>
                        </div>
                        <div className="col-md-6">
                            <img src="https://img.freepik.com/free-vector/online-games-concept-with-man-playing_23-2148524434.jpg" alt="Games List Interfaces" className="img-fluid img_responsive" style={{borderRadius: '10px', boxShadow: '0 0 40px rgb(62, 3, 133)', maxHeight: '300px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '1rem'}}/>
                        </div>
                    </div>
                </div>

                <div className="container-fluid gradient_background" style={{padding: '30px', backgroundColor: '#1c1e29', color: 'white', borderRadius: '10px', maxWidth: '100%'}}>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <h2 className="ml-6" style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Write Your Review</h2>
                            <p className="ml-6" style={{fontSize: '0.9rem', marginTop: '10px'}}>Have anything to say about a game? Share your thoughts!</p>
                        </div>
                        <div className="col-md-6">
                            <img src="https://media.licdn.com/dms/image/D5612AQFKM4Y8Rf5Ipw/article-cover_image-shrink_720_1280/0/1689246871215?e=2147483647&v=beta&t=7R9PFV6DByuGjWiHaNArC8LPcHLjgdpI4qChl6zSJO4" alt="Games List Interfaces" className="img-fluid img_responsive" style={{borderRadius: '10px', boxShadow: '0 0 40px rgb(62, 3, 133)', maxHeight: '300px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '1rem'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PromoInfoHome