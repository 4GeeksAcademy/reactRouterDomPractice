import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const URL_BASE = 'https://rickandmortyapi.com/api/character'

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)



    const getProduct = async () => {
        try {
            let response = await fetch(`${URL_BASE}/${id}`)
            let data = await response.json()
            setProduct(data)
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-7  ">
                    < div className="card" style={{ width: "30rem" }} >
                        <img src={product?.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product?.name}</h5>
                            <p className="card-text">{product?.status}</p>
                            <Link to="/products" className="btn btn-primary">Volver a productos</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductDetail;