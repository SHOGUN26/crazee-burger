import "./App.css";
import { useState } from "react";

function App() {
  const [prenom, setprenom] = useState("");

  const handleClick = () => {
    // e.preventDefault();
    if (prenom.trim() !== "") {
      alert(`Bienvenu ${prenom}`);
    }
  };

  return (
    <>
      <h1>bienvenue chez nous !</h1>
      <h2>Connectez vous</h2>
      <form>
        <input
          value={prenom}
          type="text"
          placeholder="Entrez votre prénom..."
          required
          onChange={(e) => setprenom(e.target.value)}
        />
        <button onClick={handleClick}>Accéder à votre espace</button>{" "}
      </form>
    </>
  );
}

export default App;
