import React, { useEffect, useState } from "react";

export const UseStatePage = () => {
  const [value, setValue] = useState(0);

  const handleAdd = () => {
    setValue((previousValue) => previousValue + 1);
  };
  const handleSub = () => {
    setValue((previousValue) => previousValue - 1);
  };

  const [input, setInput] = useState("");

  const [isVisible, setVisible] = useState(true);

  const togleVisible = () => {
    setVisible((prevValue) => !prevValue);
  };

  console.log("STATE RETURN  - ", value);

  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const data = await response.json();
      setPokemonName(data.name);
    })();
  }, []);

  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  console.log("todos - ", todos);

  interface ITodoApp {
    currentTodo: string;
    todos: string[];
  }

  const [todoApp, setTodoApp] = useState<ITodoApp>({
    currentTodo: "",
    todos: [],
  });

  console.log("TODO APP STATE - ", todoApp);

  return (
    <div>
      {isVisible ? (
        <>
          <button onClick={handleSub}>Diminuir</button>
          <p>O valor atual é {value}</p>
          <button onClick={handleAdd}>Aumentar</button>
        </>
      ) : null}
      <br />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(() => e.target.value)}
      />
      <p>O valor do input é {input}</p>
      <br />
      <button onClick={togleVisible}>
        {isVisible ? "Esconder" : "Mostrar"} Counter
      </button>

      <br />
      <p>O nome do pokemon é {pokemonName}</p>

      <br />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(() => e.target.value)}
      />

      <br />
      <input
        type="text"
        placeholder="New Todo"
        value={todoApp.currentTodo}
        onChange={(e) =>
          setTodoApp((previousValue) => ({
            ...previousValue,
            currentTodo: e.target.value,
          }))
        }
      />
      <button
        onClick={() =>
          setTodoApp((previousValue) => ({
            ...previousValue,
            todos: [...previousValue.todos, previousValue.currentTodo],
            currentTodo: "",
          }))
        }
      >
        Add Todo
      </button>
      <ul>
        {todoApp.todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
