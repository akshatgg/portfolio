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
      <img src={data.avatar_url} alt="Profile" />
    </div>
  )
}

export default Home
