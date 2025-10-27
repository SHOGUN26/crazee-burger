// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

export default function OrderPage() {
  // const { nom } = useParams();
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   navigate("/"); // retour à la page d’accueil
  // };

  return (
    <div>
      <h1>Bienvenue👋 sur la page de commande</h1>

      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}
