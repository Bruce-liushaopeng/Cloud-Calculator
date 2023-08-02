import TextField, { TextFieldProps }from '@mui/material/TextField';
export default function NumberInputTextField(props: TextFieldProps, children: JSX.Element) {

	const { id, label, sx, value, onChange} = props;
	const placeHolder = `input ${label}`

	return (
		<TextField
			id={id}
			label={label}
			sx={sx}
			value={value}
			placeholder={placeHolder}
			onChange={onChange}
		>
			{children}
		</TextField>
	)
}
