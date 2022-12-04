import styles from '../styles/Input.module.css'

interface Props {
  type: string,
  placeholder: string,
  value?: string,
  //callback(): void
}

export default function Input(props: Props){
  const { type, placeholder, value } = props

  return (
    <input 
      className={styles.input}
      type={ type }
      placeholder={ placeholder }
      value={ value }
    />
  )
}