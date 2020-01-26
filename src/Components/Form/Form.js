import React, {useState} from 'react';

const Form = ({ addNewIdea }) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      addNewIdea(value);
      setValue('');
    }

    return (
        <form>
            <input type='text' 
                   placeholder='Add your idea'
                   value={value}
                   onChange={(e) => setValue(e.target.value)}
                   />
            <button onClick={handleSubmit}>Submit Idea</button>
        </form>
    )
};

export default Form;