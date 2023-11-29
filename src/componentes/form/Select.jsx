import styles from './Select.module.css'

function Select({type, text, name, handleOnChange, value}) {
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione Uma Opção</option>
            </select>

        </div>

    )
}

export default Select