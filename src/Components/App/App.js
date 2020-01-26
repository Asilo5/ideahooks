import React, {useState} from 'react';
import './App.css';

import TodosContainer from '../TodosContainer/TodosContainer';
import Form from '../Form/Form';

const App = () => {
    
   const [ ideas, setIdeas ] = useState([]);

   const addNewIdea = (theIdea) => {
     const newIdea = [...ideas, { id: Date.now(), usersIdea: theIdea }];
     setIdeas(newIdea);
   }

   const deleteIdea = (id) => {
     const updatedIdea = ideas.filter((idea) => idea.id !== id);
     setIdeas(updatedIdea);
   }

  return (
    <main>
       <h1>Todo Hooks</h1>
       <TodosContainer ideas={ideas} deleteIdea={deleteIdea} />
       <Form addNewIdea={addNewIdea}/>
    </main>
  )

}

export default App;
