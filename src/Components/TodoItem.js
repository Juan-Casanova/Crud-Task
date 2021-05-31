/*aqui es donde se obtendra la infomacion de la tarea a crear o actualizar */
/*this is where the information of the task to be created or updated will be obtained */

const TodoItem = ({task,student, id, isCompleted, handleDelete, handleUpdate}) => {

    return(
        <div className="containerTask">
            <p>{task}</p> <p>{student}</p> <p>Tarea: {
            isCompleted===false?"incompleta":"completa"}</p>
            
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button onClick = {() => handleUpdate(id,task,student,isCompleted)}>Tarea Acompletada</button>
        </div>
    )

}

export default TodoItem