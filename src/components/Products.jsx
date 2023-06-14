import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
const img = "icons/80945-200 1.png"
const baseUrl = "https://api.npoint.io"

const Products = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearchUsers] = useState([]);
    const [change, setChange] = useState([]);
    const [price, setPrice] = useState([]);
    const [loading, setLoading] = useState(false);


    function handelClick() {
        setLoading(true)
        const endPoint = "/9f57b6ef2898603a9323"
        Axios.get(baseUrl + endPoint)
        .then(res => {
            setChange(res.data)
        })
        setLoading(false)
    }

    function getUsers() {
        const endPoint = "/17f6e24c339824ee142d"
        Axios.get(baseUrl + endPoint)
            .then(res => {
                setUsers(res.data)
            })
    }
    function getPrice() {
        const endPoint = "/a523c4b0edb69438221a"
        Axios.get(baseUrl + endPoint)
            .then(res => {
                setPrice(res.data)
                setSearchUsers(res.data)
            })
    }

    const searchUsers = (e) => {
        let text = e.target.value;
        const searchInput = search.filter(item => {
            return (
                item.title.toLowerCase().includes(text.toLowerCase())
            )
        })
        setUsers(searchInput);
        setChange([]);
        setPrice([])
        const kategory=document.querySelector(".kategory");
        kategory.style.display="none"

    }

    const handleChange = (e) => {
        let text = e.target.value;
        const textValue = price.filter(user => (
            user.title.toLowerCase().includes(text.toLowerCase())
        ))
        setUsers(textValue);
        setChange([]);
        // setPrice([])
        const kategory=document.querySelector(".kategory");
        kategory.style.display="none"
    }



    useEffect(() => {
        getUsers()
        handelClick()
        getPrice()
    }, []);

    return (
        <>
    {
        (loading)?
        (
            <div className='sipder min-vh1-100'>
                <h1 className='display-1'>LOADING..</h1>
            </div>
        )
        :
        <div className="container">
        <div className='d-flex justify-content-between   gap-4  pt-5 pb-4  m-auto'>
            <select onChange={handleChange} className='form-select   w-25'>
                <option defaultValue="" >Категории</option>
                <option defaultValue="Krasovka" >Krasovka</option>
                <option defaultValue="Makas">Makas</option>
                <option defaultValue="Tufli">Tufli</option>
            </select>
            <div className='d-flex gap-5 '>
                <input type="text" className='form-control w-50' placeholder='start' />
                <input type="text" className='form-control w-50' placeholder='end' />
            </div>
        </div>
        <input onInput={searchUsers} type="search" placeholder='Пoиск' name='search' className='form-control  px-4' />
        <div className='d-flex justify-content-between pt-4 pb-5'>
            {
                (users.length > 0) &&
                (users.map((user, index) => (
                    <div key={index} >
                        <img src={user.img} alt={user.id} />

                    </div>
                )))
            }
        </div>
        <div>

            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    {
                        change.map((res, index) => (
                            <div className="carousel-item active" key={index}>
                                <img src={res.img} className="d-block w-100" alt="..." />
                            </div>
                        ))
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className='kategory'>
                <h1 className='text-center text-success py-5'>Категории</h1>
                <div className='d-flex justify-content-between '>
                    <div className='d-flex flex-column gap-3'>
                        <div className='d-flex gap-3 btn boxs'>
                       <img src={img} alt="" />
                       <h4>Брюки</h4>
                        </div>
                        <div className='d-flex gap-3 btn boxs'>
                       <img src={img} alt="" />
                       <h4>Верхняя одежда</h4>
                        </div>
                        <div className='d-flex gap-3 btn boxs'>
                       <img src={img} alt="" />
                       <h4>Джемпер</h4>
                        </div>
                        <div className='d-flex gap-3 btn boxs'>
                       <img src={img} alt="" />
                       <h4>Свитер</h4>
                        </div>
                        <div className='d-flex gap-3 btn boxs'>
                       <img src={img} alt="" />
                       <h4>Кардиган</h4>
                        </div>
                        <div className='d-flex gap-3 btn boxs'>
                       <img src={img} alt="" />
                       <h4>Водолазка</h4>
                        </div>
                    </div>
                    <div className='d-flex flex-column gap-3'>
                        <div className='d-flex gap-3 btn boxs'>
                       <img src={img} alt="" />
                       <h4>Брюки</h4>
                        </div>
                        <div className='d-flex gap-3 btn boxs'>
                       <img src={img} alt="" />
                       <h4>Верхняя одежда</h4>
                        </div>
                        <div className='d-flex gap-3 btn boxs'>
                       <img src={img} alt="" />
                       <h4>Джемпер</h4>
                        </div>
                        <div className='d-flex gap-3 btn boxs'>
                       <img src={img} alt="" />
                       <h4>Свитер</h4>
                        </div>
                        <div className='d-flex gap-3 btn boxs'>
                       <img src={img} alt="" />
                       <h4>Кардиган</h4>
                        </div>
                        <div className='d-flex gap-3 btn boxs'>
                       <img src={img} alt="" />
                       <h4>Водолазка</h4>
                        </div>
                    </div>
                    <div className='d-flex flex-column gap-3'>
                        <div className='d-flex gap-3 btn boxs'>
                       <img src={img} alt="" />
                       <h4>Пуловер</h4>
                        </div>
                        <div className='d-flex gap-3 btn boxs'>
                       <img src={img} alt="" />
                       <h4>Комбинезоны</h4>
                        </div>
                        <div className='d-flex gap-3 btn boxs'>
                       <img src={img} alt="" />
                       <h4>Домашная одежда</h4>
                        </div>
                        <div className='d-flex gap-3 btn boxs'>
                       <img src={img} alt="" />
                       <h4>Нижнее бельё</h4>
                        </div>
                        <div className='d-flex gap-3 btn boxs'>
                       <img src={img} alt="" />
                       <h4>Носки и гетры</h4>
                        </div>
                        <div className='d-flex gap-3 btn boxs'>
                       <img src={img} alt="" />
                       <h4>Водолазка</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex flex-wrap gap-3 py-5'>
                {
                    price.map((res, index) => (
                        <div className="card" key={index}>
                            <img src={res.img} className="card-img-top" alt={res.title} />
                            <div className="card-body">
                                <p className="card-text">${res.price}</p>
                                <h5 className="card-title">{res.title}</h5>
                                <Link to={`/details/${res.id}`} className="btn btn-success w-100">Добавлять</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    }
        </>
    )
}

export default Products
