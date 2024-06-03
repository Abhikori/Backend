import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [phones, setPhones] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/phones')
    .then((res) => {
      setPhones(res.data)
      })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  
  

  return (
    <>
      <h1>Phones</h1>
      
      <p>Phones no. : {phones.length}</p>
      {
        phones.map((phone,index)=>
          <div key={phone.id}>
            <h3>{phone.name}</h3>
            {phone.data && (
              <div>
                {Object.entries(phone.data).map(([key,value])=>(
                  <p key={key}>{key} : {value}</p>
                ))}
              </div>
            )}
          </div>
        )
      }
    </>
  )
}

export default App
