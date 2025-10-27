import { useState } from "react";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState();
  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  // affichage (render)

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Entrez votre prénom"
        required
        value={inputValue}
      />
      <button>Accédez à votre espace</button>
    </form>
  );
}
