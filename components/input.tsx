interface Props {
  type: string,
  placeholder: string,
  callback(): void,
  value: string
}

export default function Input(props: Props){
  const { type, placeholder, value, callback } = props

  return (
    <input 
      type={ type }
      placeholder={ placeholder }
      value={ value }
      onChange={ callback }
    />
  )
}