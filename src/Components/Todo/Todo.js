import React from 'react';

const Todo = ({usersIdea, id}) => {
  return (
      <section className='todo'>
          <p>{usersIdea}</p>
          <button>X</button>
      </section>
  )
};

export default Todo;