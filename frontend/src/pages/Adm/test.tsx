import React from 'react'

const Test = () => {

    const ong = {
        id: 1,
        logourl: "https://i.imgur.com/dCyBDxd.jpg",
        sobre: "funcionando?"
    };

  return (

    <div>
      <img src={ong.logourl} >
      </img>
      <h2>{ong.sobre} </h2>
    </div>
  )
}

export default Test
