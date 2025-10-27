import { useParams, useNavigate } from "react-router-dom";

export default function OrderPage() {
  const { nom } = useParams();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // retour à la page d’accueil
  };

  return (
    <div>
      <h1>Bienvenue {nom} 👋 sur la page de commande</h1>
      <button onClick={handleLogout}>Déconnexion</button>
    </div>
  );
}
