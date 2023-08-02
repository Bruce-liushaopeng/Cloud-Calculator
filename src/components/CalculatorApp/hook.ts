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

    const resultStyleProps = {
      input: {textAlign: "center"},
      width: "90px"
    }

    const operatorStyleProps = {
        width:'60px',
        marginRight:'15px'
    }

    const resultButtonStyleProps = {
      fontSize: "20px",
      padding: '5px 15px',
      textTransform: 'none'
    }
    return { boxStyleProps, xYTextFieldStyleProps, operatorStyleProps, resultStyleProps, resultButtonStyleProps }
}

export { useHook }