import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

function ViewCounter(){

  const [views,setViews] = useState(10);

  useEffect(()=>{

    fetch("https://akshaykumarg481-gif.github.io/portfolio/views")
      .then(res=>res.json())
      .then(data=>{
        setViews(data.value);
      });

  },[]);

  return(
    <div className="view-counter">
      <FaEye />
      <span>{views}</span>
    </div>
  )
}

export default ViewCounter;