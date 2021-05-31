/*Aqui se manda hacer todas las llamadas al servidor para luego enviar y recibir segun sea el caso*/
/*Here it is ordered to make all the calls to the server and then send or receive as the case may be*/

import { useEffect, useState } from 'react'

import Create from '../Services/create'
import Read from '../Services/read'
import Delete from '../Services/delete'
import Update from '../Services/update'

import CreateTodo from './CreateTodo'
import TodoItem from './TodoItem'

const TodoContainer = () => {

    const [data, setData] = useState ([])
    const [taskCreate, setTaskCreate] = useState(null)
    const [taskDelete, setTaskDelete] = useState(null)
    const [taskUpDate, setTaskUpDate] = useState(null)

    useEffect( () => { 
        Read().then(data=>{
            setData(data.data.todos)
        })
        
    },[])

    useEffect (() => {
        if(taskCreate) {
            Create(taskCreate).then(
                res => {
                setData((prev) => [res.data, ...prev])
            })
        }
    },[taskCreate])

    useEffect (() => {
        if(taskDelete) {
            Delete(taskDelete).then(() =>{
                setData(prev => {
                    return prev.filter(value => value.id !== taskDelete)
                })
            })
        }
    },[taskDelete])

    useEffect (() => {
        if(taskUpDate) {
            Update(taskUpDate).then(
                res => {
                    console.log(res)
                    setData(prev => prev.map((task)=>{
                        if(task.id === taskUpDate.id) {
                            return res.data
                        }
                        return task
                    }))
                }
            )
        } 
    },[taskUpDate])

    const handleCreate = (values) => {
        setTaskCreate(values)
    }

    const handleDelete = id => {
        setTaskDelete(id)
    }

    const handleUpdate = (id,task,student,isCompleted) => {
        let complete = isCompleted
        isCompleted === false ? complete=true : complete=false
        isCompleted === true ? complete=false : complete=true
        setTaskUpDate({id, task, student, complete})
    }

    const list = data.map(task => (
        <TodoItem 
        task={task.task}
         student={task.student} 
         key={task.id}
         id={task.id}
         isCompleted={task.isCompleted}
         handleDelete={handleDelete}
         handleUpdate={handleUpdate}
         />
    ))

    return (
        <div id="createTodo">

            <CreateTodo handleCreate = {handleCreate}/>
            <h5>Task Asignadas</h5>
            <div id="contenedorTask">
                {list}
            </div>

        </div>
    )
}

export default TodoContainer