import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h2>API-Connected React App</h2>
      {
        loading ? (<p>Loading data...</p>) : (
          <div>
            {
              users.map((user)=>(
                <div style={{border:'2px solid white', margin:'5px', }}>
                  <h3>UserName: {user.name}</h3>
                  <h3>UserEmail: {user.email}</h3>
                  <h3>CompanyName: {user.company.name}</h3>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default App