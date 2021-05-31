import axios from 'axios'

const urlBase = 'https://todos-go.herokuapp.com/api/todos'

const create = (newTask) => {
    
    const promise = axios({
        method : 'POST',
        url : urlBase,
        data : newTask
    })

    return promise
}

export default create