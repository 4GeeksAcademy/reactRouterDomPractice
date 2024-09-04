import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const URL_BASE = 'https://rickandmortyapi.com/api'

const Products = () => {
    const [character, setCharacter] = useState([])

    const getAllCharacter = async () => {
        try {
            let response = await fetch(`${URL_BASE}/character`)
            let data = await response.json()
            console.log(data.results);
            setCharacter(...character, data.results)


        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {
        getAllCharacter()
    }, [])

    return (
        <div className="container ">
            <div className="row">
                {
                    character.map((item) => {
                        return (
                            <div key={item.id} className="col-12 col-md-7  ">
                                < div className="card" style={{ width: "15rem" }} >
                                    <img src={item.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.species}</p>
                                        <Link to={`/product/${item.id}`} className="btn btn-primary">ver detalle</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products;