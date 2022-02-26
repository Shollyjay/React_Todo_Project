import React, { Component } from 'react'

import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit} = this.props
        return ( 
           <ul className="list-group my-5" >
               <h3 className="text-capitalize text-center">
                    todo list
               </h3>

               {items.map(item => {
                   return <TodoItem key={items.id} 
                                    title={item.item}
                                    handleDelete={() => handleDelete(item.id)} 
                                    handleEdit={()=> handleEdit(item.id)}
                        />
               })}
               

                <button type="button" 
                        className="btn btn-danger btn-sm btn-block mt-5" 
                        onClick={clearList} 
                >
                   clear list
               </button>
           </ul>
        )
    }
}