import { useState } from 'react';
import { TextFieldProps }from '@mui/material/TextField';

function useNumberInputTextField() {
	const [input, setInput] = useState('')

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value)
	}

    return {input, setInput, handleInputChange}
}

export default useNumberInputTextField