import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

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
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <br />
      <h2>Connectez-vous</h2>
      <div className="input-wrapper">
        <CgProfile className="input-icon" />
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Entrez votre prénom"
          required
          value={inputValue}
        />
      </div>

      <div>
        <Link to={`/order/${inputValue}`}>
          <div>
            <button type="submit">
              <span>Accédez à mon espace</span>
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </Link>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  h1 {
    color: white;
    font-family: "Amatic SC", cursive;
    text-align: center;
    font-size: 48px;
    margin-top: 35px;
  }

  h2 {
    color: white;
    font-family: "Amatic SC", cursive;
    text-align: center;
    font-size: 36px;
  }

  hr {
    border: none;
    height: 2px;
    background-color: #ffa01b;
    opacity: 1.5;
  }

  input {
    display: flex;
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 5px;
    border: none;
  }

  button {
    width: 100%;
    padding: 12px;
    margin: 3px 0;
    background-color: #ffa01b;
    border: none;
    color: white;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    border-radius: 5px;
  }

  button:hover {
    background-color: white; /* fond blanc */
    color: #ffa01b; /* texte orange */
    border: 1px solid #ffa01b;
    cursor: pointer;
  }

  .input-wrapper {
    position: relative;
    width: 100%;
  }

  .input-wrapper .input-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: gray;
  }

  .input-wrapper input {
    padding-left: 40px; /* espace pour l'icon */
  }
`;
