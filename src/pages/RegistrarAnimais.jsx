import {useHistory} from 'react-router-dom'
import ProjectForm from '../componentes/ProjectForm'
import styles from '../styles/RegistrarAnimais.module.css'

function RegistrarAnimais(){

    const history = useHistory()

    function createPost(vaca){
        //iniciando cost and services
        vaca.cost = 0
        vaca.services = []
        
        fetch('http://localhost:8080/api/vacas',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(vaca),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            history.push('/api/vacas', {message: 'Criada com sucesso'})
        })
        .catch((err) => console.log(err))
    }

    

    
        return (
            <div className={styles.divform}>

                <h1>Registrar Animal</h1>
                <ProjectForm handleSubmit={createPost}/>
            
            </div>
        );
    
}

export default RegistrarAnimais;