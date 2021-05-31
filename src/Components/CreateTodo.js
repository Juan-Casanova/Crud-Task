/*Aqui es donde se muestra las tareas y su informacion del nombre de la tarea y del alumno que la va hacer*/
/*this is where the task and their information on the neame of the task and the student who will perform it are displayed */
import { useForm } from 'react-hook-form'

const CreateTodo = ({handleCreate}) => {

    const { handleSubmit, register } = useForm()

    const onSubmit = (values) => {
        
        handleCreate(values)

    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>

            <div>
                <label htmlFor='task'>Tarea: </label>
                <input type='text' id='task' placeholder="Bañar perritos" {...register('task', {required : true})}/>
            </div>

            <div>
                <label htmlFor='student'>Student: </label>
                <input type='text' id='student' placeholder="Sergio el bailador" {...register('student', {required : true})}/>
            </div>

            <button>Enviar</button>

        </form>
    )

}

export default CreateTodo