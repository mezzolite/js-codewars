// The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

// The function should return an array where
// coins[0] = pennies ==> $00.01
// coins[1] = nickles ==> $00.05
// coins[2] = dimes ==> $00.10
// coins[3] = quarters ==> $00.25

// So for example:
// coinCombo(6) --> [1, 1, 0, 0]

var coinCombo = function(cents) {
    const resultArray = []
    let quarters = Math.floor(cents / 25)
    let dimes = Math.floor(cents / 10)
    let nickles = Math.floor(cents / 5)
    let pennies = Math.floor(cents / 1)
    if(quarters === 0){
      resultArray.push(quarters)
      if(dimes === 0){
        resultArray.unshift(dimes)
        if(nickles === 0){
        resultArray.unshift(nickles)
        resultArray.unshift(pennies)
        } else {
            resultArray.unshift(nickles)
            let newCents = cents - (nickles * 5)
            resultArray.unshift(Math.floor(newCents/ 1))
        }
      } else {
          resultArray.unshift(dimes)
          let newCents = cents - (dimes * 10)
          let nickles = Math.floor(newCents / 5)
          if(nickles === 0){
              resultArray.unshift(nickles)
              resultArray.unshift(Math.floor(newCents/ 1))
          } else {
              resultArray.unshift(nickles)
              let newCents = cents - (nickles * 5)
              resultArray.unshift(Math.floor(newCents/ 1))
          }
      }
    } else {
      resultArray.push(quarters)
      let newCents = cents - (quarters * 25)
      let dimes = Math.floor(newCents / 10)
      if(dimes === 0){
        resultArray.unshift(dimes)
        let nickles = Math.floor(newCents / 5)
        if(nickles === 0){
          resultArray.unshift(nickles)
          let pennies = Math.floor(newCents / 1)
          resultArray.unshift(pennies)
        } else {
            resultArray.unshift(nickles)
            let newCents = cents - (nickles * 5)
            resultArray.unshift(Math.floor(newCents/ 1))
        }
      } else {
        resultArray.unshift(dimes)
        let newCents = cents - (dimes * 10)
        let nickles = Math.floor(newCents / 5)
        if(nickles === 0){
            resultArray.unshift(nickles)
            resultArray.unshift(Math.floor(newCents/ 1))
        } else {
            resultArray.unshift(nickles)
            let newCents = cents - (nickles * 5)
            resultArray.unshift(Math.floor(newCents/ 1))
        }
      }
    }
    return resultArray
  }