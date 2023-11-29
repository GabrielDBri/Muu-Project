import styles from './ProjectForm.module.css'
import SubmitButton from './form/SubmitButton'
import Input from './form/input'
import { useState, useEffect } from 'react'

function ProjectForm ({handleSubmit, vacasData}) {
    const [vaca, setVacas] = useState(vacasData || {})

    useEffect(() => {
        // Certificar-se de que handleSubmit é uma função
        if (typeof handleSubmit !== 'function') {
            console.error('handleSubmit não é uma função');
        }
    }, [handleSubmit]);


    const submit = (e) => {
        e.preventDefault() 
        handleSubmit(vaca)
    }

    function handleChange(e){
        setVacas({ ...vaca, [e.target.name]: e.target.value })
    }


        return(
            <form onSubmit={submit} className={styles.form}>
                <Input
                type="text"
                text="Nome do animal:"
                name="nome"
                placeholder="Insira O Nome Do Animal"
                handleOnChange={handleChange}
                value={vaca.nome ? vaca.nome : ''}
                />

                <Input
                type="text"
                text="Raça:"
                name="raca"
                placeholder="Insira A Raça Do Animal"
                handleOnChange={handleChange}
                value={vaca.raca ? vaca.raca : ''}
                />

                <Input
                type="text"
                text="Sexo:"
                name="sexo"
                placeholder="Insira O Sexo Do Animal"
                handleOnChange={handleChange}
                value={vaca.sexo ? vaca.sexo: ''}
                />

                <SubmitButton text="Enviar"/>

            </form>
        )
    
}

export default ProjectForm