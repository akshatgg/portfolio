import { useState } from "react"
function GithubDP() {
    const [data,setdata] =useState([])
      
    fetch('https://api.github.com/users/akshatgg')
    .then(response=>response.json())
    .then(content=>{
        setdata(content)
    })
    .catch(error => {
                console.error('Error fetching data:', error);
            });



  return (
    <div>
<img
  src={data.avatar_url}
  alt="Profile"
  style={{ width: '20%', height: 'auto' }}
  className="rounded-full"
/>
    </div>
  )
}

export default GithubDP
