import EnterButton from "../components/enterButton";
import Input from "../components/input";

import styles from '../styles/Login.module.css'

export default function Login() {
  return (
    <>
      <form className={styles.main}>
        <h2 className={styles.title}>Entrar</h2>
        <div className={styles.inputs}>
          <Input 
            type={"string"}
            placeholder={"Email ou número de telefone"}
          />
          <Input 
            type={"string"}
            placeholder={"Senha"}
          />
        </div>
        <div>
          <EnterButton />
          <input type="checkbox" id="remember" name="remember"/>
          <label htmlFor="remember">Lembrar de mim</label>
        </div>
      </form>
    </>
  )
}