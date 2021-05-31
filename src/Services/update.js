import axios from 'axios'

const urlBase = 'https://todos-go.herokuapp.com/api/todos'

const update = (task) => {

    console.log(task.complete)

    const promise = axios({
        method : 'PUT',
        url : `${urlBase}/${task.id}`,
        data : {
            task:task.task,
            student:task.student,
            isCompleted:task.complete
        }
    })

    return promise
}

export default update