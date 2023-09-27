import React from 'react'

const TaskCard = ({task}) => {
  return (
    <div className=''>
        <header>
            <h1>{task.title}</h1>
        </header>
        <body>
            <p>{task.description}</p>
        </body>
    </div>
  )
}

export default TaskCard