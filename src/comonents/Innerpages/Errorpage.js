import React from 'react'

const Errorpage = () => {
  return (
    <div>
        <h1 className='my-5 text-center'>Invalid URL.....</h1>
        {setTimeout(() => {
            window.location = "/";
        }, 5000)}
    </div>
  )
}

export default Errorpage