import React from 'react';
import Todo from '../Todo/Todo';

const TodosContainer = ({ideas, deleteIdea}) => {

    const theIdea = ideas.map((idea) => {
        console.log('idea', idea.usersIdea)
       return <Todo key={idea.id} {...idea} deleteIdea={deleteIdea} />
    });


    return (
        <section className='todo-section'>
           {theIdea} 
        </section>
    )
};

export default TodosContainer;