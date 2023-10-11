"use client"
import React, { useEffect, useState } from 'react'

export default function Page() {
     const[product,setProduct]=useState([])
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://dummyjson.com/products");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                //console.log(data.products,"kkkk")
                 setProduct(data.products)
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
         fetchData();
    }, []);
    console.log(product," console.log(product)")

    return (
        <div>
            <h1>Product List</h1>
           
            {
                product.map((items)=>(
                    <h3> name: {items.title}</h3>
                ))
            } 
        </div>
    )
}
