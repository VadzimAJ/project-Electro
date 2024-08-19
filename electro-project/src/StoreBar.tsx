import React from 'react'
import { ElectroProductsType } from './App'


type StoreBar = {
  electroProducts: ElectroProductsType[]
}
export const StoreBar = (props:StoreBar) => {
  return (<div >
    {props.electroProducts.map((product, index) => (
      <div  className='produsct-div' key={index}>
        <span>{product.name}</span>
        <span>{product.cost}</span>
        <span>{product.count}</span>
      </div>
    ))}
  </div>
  )

  
}