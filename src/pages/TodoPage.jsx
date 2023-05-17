import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState } from 'react';

const dummyTodos = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
    isEdit: false,
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
    isEdit: false,
  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
    isEdit: false,
  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
    isEdit: false,
  },
];

const TodoPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(dummyTodos);
  const handleChange = (value) => {
    setInputValue(value);
  };
  const handleAddTodo = () => {
    if (inputValue.length !== 0) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            id: Math.random() * 100,
            title: inputValue,
            isDone: false,
          },
        ];
      });
    }

    setInputValue('');
  };

  const handleKeyDone = () => {
    if (inputValue.length !== 0) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            id: Math.random() * 100,
            title: inputValue,
            isDone: false,
          },
        ];
      });
    }

    setInputValue('');
  };
  const handleToggleDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      }),
    );
  };
  const handleChangeMode = ({ id, isEdit }) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isEdit,
          };
        }
        return {
          ...todo,
          isEdit: false,
        };
      }),
    );
  };
  const handleSave = ({ id, title }) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title,
            isEdit: false,
          };
        }
        return todo;
      }),
    );
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      TodoPage
      <Header />
      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onAddTodo={handleAddTodo}
        onKeyDown={handleKeyDone}
      />
      <TodoCollection
        todos={todos}
        onToggleDone={handleToggleDone}
        onChangeMode={handleChangeMode}
        onSave={handleSave}
        onDelete={handleDelete}
      />
      <Footer remainingItems={todos.length} />
    </div>
  );
};

export default TodoPage;