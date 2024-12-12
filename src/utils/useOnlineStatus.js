import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  // because need to add event listener only once
  useEffect(()=>{
    
  //check if online or not, for that we need to adde event listener
    window.addEventListener("online",() =>{
        setOnlineStatus(true);
    });

    window.addEventListener("offline",() =>{
        setOnlineStatus(false);
    });
  },[])

  //return boolean value
  return onlineStatus;
};

export default useOnlineStatus;
