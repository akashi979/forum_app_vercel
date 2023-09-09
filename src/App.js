

import { useState,useEffect } from 'react';
import Axios from "axios";

function App() {

  const [trial,setTrial]= useState([{"name":"albanian","age":20},{"name":"izmir","age":20}])
  const [count, setCount] = useState(0);

  useEffect (()=>{
  
     Axios.get("http://localhost:3001/getUsers").then((response)=>{
      setTrial(response.data)
  
     }).catch((err)=>{console.log("backend stopped")})
 
      
     

     

  },[])


  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }); 
  

  const [name,setName] =useState("Nill")
  const [age,setAge] =useState(0)
  const [username,setUsername] =useState("Nill")

  const createUser = () =>{
    Axios.post("http://localhost:3001/createUsers",{
      name:name,
      age:age,
      username:username ,
    }).then((response)=>{
      alert("user created successfully")
      setTrial([...trial,{
        name:name,
        age:age,
        username:username
      }])
    }).catch((err)=>{console.log("backend stopped")})
  }





  return (
    <div className="App">

     <div>
      <input type="text" placeholder="Name" onChange={(event)=>{
        setName(event.target.value)

      }} />

      <input type="number" placeholder="Age" onChange={(event)=>{
        setAge(event.target.value)

      }}  />

      <input type="text" placeholder="Username" onChange={(event)=>{
        setUsername(event.target.value)

      }} />

      <button onClick={createUser}>Create a newuser</button>
     </div>

     <div><h1>refreshed {count} times</h1></div>
     
     {trial.map(
       (item,index)=>{
        return <div>
                      <h1>{index +1}. Name is {item.name}</h1>
                      <h1>{item.age} years old</h1>
               </div>
       }

     )}

    </div>
  );
}

export default App;
