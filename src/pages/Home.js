import React from "react";
import {useState,useEffect} from 'react';
import Spinner from "../components/Spinner";
import Product from "../components/Product";

function Home(){
    const API_URL = "https://fakestoreapi.com/products";
     const [loading,setLoading]=useState(false);
     const [items,setItems]=useState([]);

     async function fetchData(){
        setLoading(true);
           try{
          const result=await fetch(API_URL);
          const data=await result.json();
          console.log(data);
          setItems(data);
           }
           catch(err){
              console.log("data is not fetch properly");
             
           }
           setLoading(false);
      }

      useEffect(()=>{
        fetchData();
      },[]);

    return (<div className="flex justify-center items-center">
            {
                loading?<Spinner/>:(
                items.length>0?(
                  <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                  lg:grid-cols-4 gap-5
                  gap-y-8 max-w-6xl p-6 mx-auto my-7 min-h-[80vh]">
                        {
                      items.map((item)=>(
                        <Product key={item.id} item={item} />
                      ))
                        }
                </div>
                ):<div className="w-screen h-screen justify-center items-center"> 
                <p  className="font-bold">No item Found</p></div>

                )
            }
      
    </div>)
 }
 export default Home;