 import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";   
import { useState ,useEffect } from 'react';
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";


     
     
function App(){

const API_URL="http://localhost:3000/items"
const [items , setitems]=useState([]);
const [newitem ,setnewitem]=useState('')
const [search ,setSearch]=useState('')
const [FetchError ,setFetchError]=useState(null)
const [isLoading ,setIsLoading]=useState(true)



useEffect( () => {

const fetchitems =async () =>{
  try{
    const response= await fetch(API_URL);
    if(!response.ok) throw Error("data not receievd")
    const listitems=await response.json();
    console.log(listitems)
    setitems(listitems)
    setFetchError(null)

}
catch(err){
  setFetchError(err.message)
}
finally{
  setIsLoading(false)
}
}
setTimeout( () =>{
(async () => await fetchitems())()
} ,1000) 
},[])  




const addItem= async (item)=>{
  const id=items.length ? items[items.length-1].id+1 :1;
  const addNewItem={id,checked:false,item}
  const Listitems=[...items,addNewItem]
  setitems(Listitems)

  const postOptions={
   method :'POST',
    headers :{
      'Content-Type':'application/json'
  },
   body: JSON.stringify(addNewItem)
 }
 const result= await apiRequest(API_URL,postOptions)
 if(result) setFetchError(result)
}
const handleCheck = async (id)=>{
const listItems=items.map((item)=>
    item.id===id ?{...item ,checked:!item.checked} :item)
    setitems(listItems)

    const myitem=listItems.filter((item) =>
      item.id===id
    )
    const updateoptions={
      method :'PATCH',
       headers :{
         'Content-Type':'application/json'
     },
      body: JSON.stringify({checked:myitem[0].checked})
    }
    const requrl=`${API_URL}/${id}`
    const result= await apiRequest(requrl,updateoptions)
    if(result) setFetchError(result)
   
  }

  const handledelete= async (id)=>{
    const listItems=items.filter((item)=> item.id!==id)
    setitems(listItems)

    const deleteoptions={method :'DELETE'}

    const requrl=`${API_URL}/${id}`
    const result= await apiRequest(requrl,deleteoptions)
    if(result) setFetchError(result)
   
   
  }

  const handlesubmit=(e)=>{
    e.preventDefault()
    if(!newitem) return;
    console.log(newitem)
    addItem(newitem)
    setnewitem(' ')

  }

 


return(
  <div className="App">
    <Header title= "To-do List"/>
    <AddItem 
        newitem={newitem}
        setnewitem={setnewitem}
        handlesubmit={handlesubmit}
    />
    <SearchItem 
      search={search}
      setSearch={setSearch} 
    />
    <div>
      {isLoading && <p>Loading items...!</p>}
      {FetchError && <p>{`Error : ${FetchError}`}</p>}
        {!isLoading && !FetchError &&<Content
        items={items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))
        }
          handleCheck={handleCheck}
          handledelete={handledelete}
      

        />}
    </div>
    <Footer
     length={items.length}
     />
  </div>
);
}


export default App;