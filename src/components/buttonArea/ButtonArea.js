import React from "react"
import Button from "./Button"
import "./button-area.css"

function ButtonArea(props) {
  return(
    <div className="button-area">
      <Button label="C" addToCalcStack={props.addToCalcStack} />
      <Button label="/" addToCalcStack={props.addToCalcStack} />
      <Button label="X" addToCalcStack={props.addToCalcStack} />
      <Button label="DEL" addToCalcStack={props.addToCalcStack} />

      <Button label="7" addToCalcStack={props.addToCalcStack} />
      <Button label="8" addToCalcStack={props.addToCalcStack} />
      <Button label="9" addToCalcStack={props.addToCalcStack} />
      <Button label="+" addToCalcStack={props.addToCalcStack} />

      <Button label="4" addToCalcStack={props.addToCalcStack} />
      <Button label="5" addToCalcStack={props.addToCalcStack} />
      <Button label="6" addToCalcStack={props.addToCalcStack} />
      <Button label="-" addToCalcStack={props.addToCalcStack} />

      <Button label="1" addToCalcStack={props.addToCalcStack} />
      <Button label="2" addToCalcStack={props.addToCalcStack} />
      <Button label="3" addToCalcStack={props.addToCalcStack} />
      <Button label="=" addToCalcStack={props.addToCalcStack} pressEquals={props.pressEquals} />

      <Button label="" />
      <Button label="0" addToCalcStack={props.addToCalcStack} />
      <Button label="." addToCalcStack={props.addToCalcStack} />
    </div>
  )
}


export default ButtonArea
