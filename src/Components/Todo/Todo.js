import React from 'react';

const Todo = ({usersIdea, id, deleteIdea}) => {
  return (
      <section className='todo'>
          <p>{usersIdea}</p>
          <button onClick={() => deleteIdea(id)}>X</button>
      </section>
  )
};

export default Todo;