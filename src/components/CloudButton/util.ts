import { validationResultType } from "./type"

const validityCheck = (inputX: string, inputY: string, operator: string): validationResultType => {
    if (operator == '') {
      return {
        isValid: false,
        message: "Don't forget select operational sign"
      }
    }
    if (operator == 'divide' && inputY == '0') {
      return {
        isValid: false,
        message: "We can't divide 0 buddy"
      }
    }
    if (inputX == '' || inputY == '') {
      return {
        isValid: false,
        message: "Don't forget give value to X and Y"
      }
    }
    return {
      isValid: true,
      message: "Success"
    }
}

export { validityCheck } 