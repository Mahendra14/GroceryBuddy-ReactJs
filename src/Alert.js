import React, { useEffect } from 'react'

const Alert = ({show,type,msg,list,removeAlert}) => {

  //using useeffect to remove the alert above for every change thats been made.
  useEffect(()=>{
    const timeout = setTimeout(() => {
      removeAlert();
    },3000);
    return () => clearTimeout(timeout);
  },[list,[]]);
  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  );
}

export default Alert
