import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Creators as TodoActions} from '../store/ducks/todos';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(TodoActions.addTodo(todo));
    setTodo('');
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input onChange={event => setTodo(event.target.value)} value={todo} />
        <button type='submit'>Novo</button>
      </form>
    </section>
  );
};

export default TodoList;
