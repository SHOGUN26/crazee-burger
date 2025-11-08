import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  // affichage (render)

  return (
    <div action="submit" onSubmit={handleSubmit}>
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
      <Link to={`/order/${inputValue}`}>
        <button type="submit">Accédez à mon espace</button>
      </Link>
    </div>
  );
}
