import React from 'react'
import { useContext } from 'react'
import DataProvider, { Data } from '../Data'
import './Products.css'
import { Link, Navigate, Outlet } from 'react-router-dom'

const Products = ({id, setId}) => {

    let {result, setResult} = useContext(Data)



  return (
    <>
    
    <div className='ProductsContainer'>
        {result?.data?.map(ele => {
            let {id , image, category, price, title} = ele
            return (
                <>
                    <Link to={`/products/${id}`}>
                        <div key={id}>
                            <img src={image} alt="" />
                            <h3>{title}</h3>
                            <p>{category}</p>
                            <span>{price}</span>
                        </div>
                    </Link>
                </>
            )
        })}
        <Outlet/>
    </div>
    </>
  )
}

export default Products