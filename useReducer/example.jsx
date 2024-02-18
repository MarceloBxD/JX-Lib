import React from "react";

export const App = () => {
  // Digamos que a gente tenha uma quantidade muito grande de estados
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(25);
  const [email, setEmail] = useState("Johndoe@gmail.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   Ao invés de fazer isso, podemos usar useReducer
  const [state, dispatch] = useReducer((prev, next) => ({ ...prev, ...next }), {
    name: "John Doe",
    age: 25,
    email: "",
    password: "",
    loading: false,
    error: null,
  });

  return (
    <>
      {/* To use the dispatch */}
      <button onClick={() => dispatch({ name: "Bracet" })}>Change name</button>
    </>
  );
};
