import React from 'react'

import Itemlist from './Itemlist'

const Content = ({items,handleCheck,handledelete}) => {

  //   const [items , setitems]=useState(
  //     [
  //        { id:1,
  //         checked :true,
  //         item:"practice coding"
  //       },
  //       { id:2,
  //         checked :false,
  //         item:"play cricket"
  //       },
  //       { id:3,
  //         checked :true,
  //         item:"Read about AI"
  //       }
  // ])
  // const handleCheck =(id)=>{
  // const listItems=items.map((item)=>
  //     item.id===id ?{...item ,checked:!item.checked} :item)
  //     setitems(listItems)
  //     localStorage.setItem("Todo-list",JSON.stringify(listItems))
  //   }

  //   const handledelete=(id)=>{
  //     const listItems=items.filter((item)=> item.id!==id)
  //     setitems(listItems)
  //     localStorage.setItem("Todo-list",JSON.stringify(listItems))
  //   }

    
   
  
  // const [name ,setname]=useState("Earn")
  //   function handleNameChange(){
  //       const names=["Earn","Give","Grow"];
  //       const int=Math.floor(Math.random()*3)
  //       setname(names[int]);
  //     }
      // const handleClick2=(e)=>{
      //   console.log(e.target.innerText)
      // }
      // const handleClick=(name)=>{
      //   console.log(`Thanks for the support ${name}`);
      // }
      // function namee(){
      //   return console.log("visit maddymahesh.in")
      // }
      // const [count , setcount]=useState(99);
      // const [name , setname]=useState(()=>namee())

      // function incrementfunction(){
      //   setcount(count =>count + 1)
      //   setcount(count =>count + 1)
      //   setcount(count =>count + 1)
      // }
      // function decrementfunction(){
      //   setcount(count => count-1)
      // }


      
  return (
    <div>
      {
        (items.length)?(
          <Itemlist 
          items={items}
          handleCheck={handleCheck}
          handledelete={handledelete} 
          />
        )
      
   
      :(
        <p style={{color:'black',fontWeight:'bold',fontSize:'25px'}}>your list is empty</p>
      )
}
        {/* <p onDoubleClick={() =>handleClick('maddy')}>lets {handleNameChange()} Money</p>
        <button onClick={(e) => handleClick2(e)}>Subscribe</button> */}
        {/* <p>Let's {name} Money</p>
        <button onClick={handleNameChange}>Subscribe</button>
       <button onClick={decrementfunction}>-</button>
        <span>{count}</span>
        <button onClick={incrementfunction}>+</button> */} 
    </div>
  
  )
}

export default Content