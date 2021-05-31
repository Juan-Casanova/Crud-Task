/*aqui es donde se obtendra la infomacion de la tarea a crear o actualizar */
/*this is where the information of the task to be created or updated will be obtained */

const TodoItem = ({task,student, id, isCompleted, handleDelete, handleUpdate}) => {

    return(
        <div className="containerTask">
            <p>Tarea: {task}</p>
            <br/>
            <p>Estudiante: {student}</p>
            <br/> 
            <p>
                Tarea: {
                    isCompleted===false?"incompleta":"completa"
                }
            </p>

            <br/>
            
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button id="botonAcompletar" onClick = {() => handleUpdate(id,task,student,isCompleted)}>
                {
                    isCompleted===false?"Se acompleto":"Menti"
                }
            </button>
        </div>
    )

}

export default TodoItem