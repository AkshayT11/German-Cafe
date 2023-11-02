import React, { useEffect, useState } from 'react'
import {HashLoader} from "react-spinners";

const Success = () => {
  const [loading, setLoading]= useState(true)

  useEffect(()=> {
    setTimeout(()=>{
      setLoading(false);
    } ,3000)
  },[])

  return (
    <div className='flex justify-center flex-col items-center h-screen'>
      {
        loading ? <HashLoader color="#36d7b7" /> :  
        <div>
      
        <h2 className='text-4xl font-black text-center mb-2'>Order SuccessFull</h2>
        <p className='text-lg font-black text-center'>Your Order Has been Placed</p>
        </div>
      }
     
    </div>
  )
}

export default Success