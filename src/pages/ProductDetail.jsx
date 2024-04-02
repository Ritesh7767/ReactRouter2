import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Data } from '../Data'
import { useEffect } from 'react'
import { useState } from 'react'
import './ProductDetail.css'

const ProductDetail = () => {

    let [filter, setFilter] = useState()
    let param = useParams()
    let {result} = useContext(Data)

    useEffect(() => {
        let value = result?.data?.filter(ele => ele.id == param.id)
        setFilter(value)
    }, [result])

    console.log(filter)
    
    return (
    <div className='parentContainer'>
        {filter && filter.map(ele => {
            let {title, description, category, price, image, rating: {rate, count}} = ele
            return (
                <>
                    <img src={image}/>                    
                    <div>
                        <h1>{title}</h1>
                        <h2>{`$${price}`}</h2>
                        <p>{description}</p>
                        <p>{category}</p>
                        <p><span>{`rating ${rate}`}</span><span>{`Rated By ${count} people`}</span></p>
                    </div>
                </>
            )
        })}
    </div>
  )
}

export default ProductDetail