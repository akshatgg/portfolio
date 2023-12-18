import { useEffect, useState } from "react"
function Home() {
    const [data,setdata]=useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/akshatgg')
        .then(response=> response.json())
        .then(content=>{
            setdata(content)
        }
         
        )
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    })
  return (
    <div className="text-black">
      ghhhhhhhh
      <img src={data.avatar_url} alt="Profile" style={{ width: '20%', height: 'auto' }} />

    </div>
  )
}

export default Home
