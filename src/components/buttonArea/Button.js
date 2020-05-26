import React from "react"

function Button(props) {
  if (typeof props.pressEquals === "function") {
    return(
      <button
        type="button"
        onClick={() => {
          props.addToCalcStack(calcStack => [...calcStack, props.label])
          props.pressEquals(isEqualsPressed => !isEqualsPressed)
        }}
      >
        {props.label}
      </button>
    )
  }
  else {
    return(
      <button
        type="button"
        onClick={() => props.addToCalcStack(calcStack => [...calcStack, props.label])}
      >
        {props.label}
      </button>
    )
  }
}

export default Button
