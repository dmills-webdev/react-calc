import React, { useState, useEffect } from "react"
import Display from "./components/display/Display"
import ButtonArea from "./components/buttonArea/ButtonArea"

function Calc() {
  let [calcStack, addToCalcStack] = useState([])
  let [isEqualsPressed, pressEquals] = useState(false)

//////////////////////////////////////////////////////////////// digitsToNumbers
  /*function digitsToNumbers(stack) {
    const digitCheck = /[0123456789]/
    let digitHolder = []
    let digitTotal = ""

    for (let i = 0; i < stack.length; i++) {
      if (stack[i].match(digitCheck)) {
        digitHolder.push(stack[i])
      }
      else {
        if (digitHolder.length > 0) {
          digitHolder.map(item => {
            digitTotal += item
          })
          stack.splice(i-digitHolder.length, digitHolder.length , parseInt(digitTotal))
          i = i - (digitHolder.length - 1)
          digitHolder = []
          digitTotal = ""
        }
      }
    }
    stack.pop()
    return stack
  }*/


  function joinNumbers(stack) { // Join together concurrent digits and decimals in calcStack to form full integers or floats
  const numCheck = /[0-9]/;
  let digitTotal = ""
  let digitCount = 0
  for (let i=0; i<stack.length; i++) {
    if (numCheck.test(stack[i]) || stack[i] == ".") { // Check if a numerical digit or decimal point, if so add to temporary stack
      digitTotal += stack[i].toString()
      digitCount += 1
    }
    else { // If a numerical operator then finalise the digits and decimcals into a multiple digit integer or float and continues
      stack[i-1] = parseFloat(digitTotal)
      stack.splice(i-digitCount, digitCount-1)
      i = i - (digitCount-1) // Adjusts stepper for how many digits have been combined when comparing to array length
      digitTotal = ""
      digitCount = 0
    }
  }
  return stack
}

////////////////////////////////////////////////////////////////// signedNumbers
  function signedNumbers() {

  }
///////////////////////////////////////////////////////////////////////// bidmas
  function bidmas(stack) {
    const operator = /[/+x-]/
    console.log(stack)
    for (let i = 0; i < stack.length; i++) {
      if (stack[i].toString().match(operator)) {
        let answer = stack[i-1] + stack[i+1]
        stack.splice(i-1, 3, answer)
        i = i - 2
      }
    }
    console.log(stack)
    addToCalcStack(stack)
  }


/////////////////////////////////////////////////////////////////// Main Program
  useEffect(() => {
    console.log(calcStack)
    if (isEqualsPressed) {
      let stack = calcStack
      stack = joinNumbers(stack)
      //signedNumbers(stack)
      bidmas(stack)
    }
  }, [calcStack, isEqualsPressed])





///////////////////////////////////////////////////////////////////////// Return
  return(
    <div>
      <Display display={calcStack}
        />
      <ButtonArea
        addToCalcStack={addToCalcStack}
        pressEquals={pressEquals}
        />
    </div>
  )
}

export default Calc
