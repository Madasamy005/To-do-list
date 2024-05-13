import React from 'react'

const Header=(props)=> {
//     const Headerstyle ={
//         backgroundColor:"blue",
//         color :"white"
//     }
 return (
   //<header style={Headerstyle}>
   <header>
        <h1>{props.title}</h1>
    </header>
  )
}
Header.defaultProps={
  title:"To do List"
}


export default Header