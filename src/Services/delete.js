import axios from 'axios'

const urlBase = 'https://todos-go.herokuapp.com/api/todos'

const deleteTask = (id) => {
    
    const promise = axios({
        method : 'DELETE',
        url : `${urlBase}/${id}`
    })

    return promise
}

export default deleteTask