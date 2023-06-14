import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios';
const baseUrl = "https://api.npoint.io"
import { Link } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [single, setSingle] = useState([]);

    function Details() {
        const endPoint = `/a523c4b0edb69438221a/${id}`
        Axios.get(baseUrl + endPoint)
            .then(res => {
                setSingle(res.data)
            })
    }
    useEffect(() => {
        Details()
    }, [])
    return (
        <div className='contaier detail min-vh-100'>
            <div className="card ">
            <img src={single.img} className="card-img-top" alt={single.title} />
            <div className="card-body">
                <p className="card-text">${single.price}</p>    
                <h5 className="card-title">{single.title}</h5>
                <Link to="/" className="btn btn-success w-100">Добавлять</Link>
            </div>
        </div>
    </div >
  )
}

export default Details
