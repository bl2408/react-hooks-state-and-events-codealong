import React, {useState} from "react";

function Toggle() {

  const [btnState, btnStateSet] = useState(false);

  const toggleBtn = ()=>btnStateSet(state=>!state);

  const col = btnState ? "red" : "white"


  return <button style={{backgroundColor: col}} onClick={toggleBtn}>{btnState ? "ON" : "OFF"}</button>;
}

export default Toggle;
