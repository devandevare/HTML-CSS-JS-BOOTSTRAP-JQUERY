const inputBox = document.querySelector("#calc-input")
//
function addInput(inputValue){
  const currentInput = inputBox.value
  const operations = ['*', '/', '+', '-']
  const lastChar = currentInput[currentInput.length - 1]
  let isOperationExists = operations.includes(lastChar) && operations.includes(inputValue)

  if(isOperationExists){
    return
  }else{
    isOperationExists = false
  }
  const newValue = currentInput + inputValue
  inputBox.value = newValue
}

function result(){

  try {
    inputBox.value = eval(inputBox.value)
  } catch (error) {
    alert('please enter valid operation')
    inputBox.value = ''
  }
}

function allClear(){
  inputBox.value = ''
}