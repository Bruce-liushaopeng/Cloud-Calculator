import TextField, { TextFieldProps }from '@mui/material/TextField';
import useNumberInputTextField from './hook';
export default function NumberInputTextField(props: TextFieldProps, children: JSX.Element) {

	const { id, label, sx} = props;
	const placeHolder = `input ${label}`

	const {input, handleInputChange} = useNumberInputTextField()

	return (
		<TextField
			id={id}
			label={label}
			sx={sx}
			value={input}
			placeholder={placeHolder}
			onChange={handleInputChange}
		>
			{children}
		</TextField>
	)
}
