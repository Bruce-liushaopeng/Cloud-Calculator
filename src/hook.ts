function useHook(){
    const boxStyleProps = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center', 
        m:'2',
        rowGap: '10px'
      }

    const xYTextFieldStyleProps = {
      width: "80px",
      marginRight:'15px'
    }

    const operatorTextFieldStyleProps = {
      input: {textAlign: "center"},
      width: "90px"
    }

    return {boxStyleProps, xYTextFieldStyleProps, operatorTextFieldStyleProps}
}

export { useHook }