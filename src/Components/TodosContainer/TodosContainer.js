import React from 'react';
import Todo from '../Todo/Todo';

const TodosContainer = ({ideas}) => {

    const theIdea = ideas.map((idea) => {
        console.log('idea', idea.usersIdea)
       return <Todo key={idea.id} {...idea} />
    });


    return (
        <section className='todo-section'>
           {theIdea} 
        </section>
    )
};

export default TodosContainer;