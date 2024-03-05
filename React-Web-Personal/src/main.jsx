import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TaskList from './components/TaskList'
import  {Task} from './components/Task'
import TaskForm from './components/TaskForm'
import App from './App'

console.log(Task)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <App/>
    </>
  </React.StrictMode>
)
