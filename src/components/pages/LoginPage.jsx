import { useState } from "react";

export default function LoginPage() {
  // state
  const [prenom, setprenom] = useState();
  // comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${prenom}`);
    setprenom("");
  };

  // affichage (render)
  return (
    <div>
      <h1>Bienvenue chez nous</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setprenom(e.target.value)}
          type="text"
          placeholder="Entrez votre prénom"
          required
          value={prenom}
        />
        <button>Accédez à votre espace</button>
      </form>
    </div>
  );
}
