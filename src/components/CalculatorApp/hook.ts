import { SxProps } from "@mui/material"

function useHook(){

  const calculatorBoxStyleProps: SxProps = {
    height: 500,
    paddingTop: 3,
  }

  const inputBoxStyleProps: SxProps = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center', 
      m:'2',
      rowGap: '10px',
      pb: 5
  }

  const xYTextFieldStyleProps: SxProps = {
    width: "90px",
    marginRight:'15px'
  }

  const resultStyleProps: SxProps = {
    input: {textAlign: "center"},
    width: "90px"
  }

  const operatorStyleProps: SxProps = {
      width:'60px',
      marginRight:'15px'
  }

  const resultButtonStyleProps: SxProps = {
    fontSize: "20px",
    padding: '5px 15px',
    textTransform: 'none',
    fontFamily: 'Comic Sans MS'
  }

  return { calculatorBoxStyleProps, inputBoxStyleProps, xYTextFieldStyleProps, operatorStyleProps, resultStyleProps, resultButtonStyleProps }
}

export { useHook }