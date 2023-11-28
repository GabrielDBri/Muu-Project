import styles from '../styles/RegistrarAnimais.module.css'
import { useState } from 'react'
function RegistrarAnimais() {

    const subirform = (event) => {
        event.preventDefault()
        console.log("olaa")
    }

    const [registrarState, setRegistrarState] = useState ({
        nome: '',
        nascimento: '',
        raça: '',
        genero: ''
    })

    const FormonChange = (event, key) => {
        setRegistrarState({...registrarState, [key]: event.target.value})

    }

    return (
        <div className={styles.divform}>
            <form className={styles.form} onSubmit={subirform}>
                <h1>Registrar Animal</h1>

                <label htmlFor="nome">Nome:
                <input 
                type="name" 
                placeholder="Digite" 
                required
                value={registrarState.nome}
                onChange={(event) => FormonChange(event, 'nome')} 
                />
                </label>

                <label htmlFor="nome">Nascimento:
                <input 
                type="date" 
                placeholder="Nascimento" 
                required 
                value={registrarState.nome}
                onChange={(event) => FormonChange(event, 'nome')} 
                />
                </label>

                <label htmlFor="nome">Raça:
                <select value={registrarState.nome} onChange={(event) => FormonChange(event, 'nome')} >
                    <option value="opcao1">Vermelho</option>
                    <option value="opcao2">Roxo</option>
                </select>
                </label>

                <label htmlFor="nome">Genero:
                <select value={registrarState.nome} onChange={(event) => FormonChange(event, 'nome')} >
                    <option value="opcao1">Macho</option>
                    <option value="opcao2">Femea</option>
                </select>
                </label>
                <button type='submit'>Enviar</button> 

            </form>

        </div>
    );
}

export default RegistrarAnimais;