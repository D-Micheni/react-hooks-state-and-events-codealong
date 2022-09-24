import React ,{useSTate} from "react";

function Toggle() {
  const[isOn, setIsOn] = useSTate(false);
  function handleClick(){
    setIsOn((isOn)=>!isOn)
  }
  const color = isOn ? "red" : "white";
  return <button
  style={{ background: color }}
  onClick={handleClick}>{isOn ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
