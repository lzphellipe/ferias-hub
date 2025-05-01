import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import intranetImg from "../assets/intranet.png";

//Components
import LoginForm from "../components/FormLogin";

const Login = () => {
  const [userCode, setUserCode] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await login(userCode, password);
    if (response.success) {
      navigate("/dashboard");
    } else {
      setError(response.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="bg-white d-flex flex-row rounded-4 shadow"
        style={{
          width: "90%",
          maxWidth: "900px",
          minHeight: "400px",
          overflow: "hidden",
        }}
      >
        {/* Lado da imagem */}
        <div
          className="d-flex align-items-center justify-content-center bg-light"
          style={{ width: "50%", padding: "20px" }}
        >
          <div className="text-center">
            <img src={intranetImg} alt="Logo" className="img-fluid" />
          </div>
        </div>

        {/* Lado do formulário */}
        <div className="d-flex align-items-center justify-content-center w-50 p-4">
          <LoginForm
            userCode={userCode}
            password={password}
            onCodeChange={(e) => setUserCode(e.target.value)}
            onPasswordChange={(e) => setPassword(e.target.value)}
            onSubmit={handleLogin}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
