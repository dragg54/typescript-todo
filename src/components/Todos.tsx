import React from 'react'
type TodoProps={
  todo: string[]
}

export const Todos = ({todo}: TodoProps) => {
  return (
    <div className='todos'>
    {todo.map((todos,index)=>{
      return(
        <div className="todo">{todos}</div>
        )
      })}
      </div>
      )}   
      

