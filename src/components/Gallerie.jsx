import { Component } from "react";
import Spinner from 'react-bootstrap/Spinner'

class Gallerie extends Component {
    state = {
        arrayFilm: [],
        caricamento:true,
    }

    getFetch = () => {

        return (
            fetch(`https://www.omdbapi.com/?&apikey=59562621&s=${this.props.nomeSerie}`)
                .then(response => {
                    return (response.json())})
                        .then(Dati => {
                           // console.log(Dati.Search)
                            this.setState({ arrayFilm: Dati.Search,caricamento:false })

                        })
                        .catch(err=>(console.log(err)))
                        
        )

    }

    componentDidMount() {
        this.getFetch();
    }

    render() {
        return (
            <>
                        {this.state.caricamento && (
              <div className="text-center">
                <Spinner animation="border" size='xl'role="status" variant="danger">
                </Spinner>
                <h3>I tuoi film stanno caricando...</h3>
              </div>
            )}
            <h5 className="text-start">{this.props.titoloRiga}</h5>
                <div id='filmsRow'>
                    
                                <div className="rowFilm">
                                    <div className="row">
                                        <div className="containerG d-flex">
                                            {
                                                this.state.arrayFilm.map((film, index) => {
                                                    return (
                                                        <div key={film.imdbID} className="filmDiv">
                                                            <img src={film.Poster} alt='film cover' />
                                                        </div>
                                                    )
                                                })
                                            }


                                        </div>
                                    </div>
                                </div>

                            </div>

            </>
        )
    }


}
export default Gallerie