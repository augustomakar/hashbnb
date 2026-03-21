import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useUserContext } from "../contexts/User.Context";

const Register = () => {
  const { user, setUser } = useUserContext()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && password) {
      try {
        const { data: userDoc } = await axios.post("/users", {
          name,
          email,
          password,
        });

        setUser(userDoc);
        setRedirect(true)
      } catch (error) {
        alert(`deu um erro ao cadastrar ${error.response.data}`);
      }
    } else {
      alert("nome, senha ou password não preenchidos");
    }
  };

  if (redirect || user) return <Navigate to="/"></Navigate>

  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Registre-se</h1>
        <form
          action=""
          className="flex w-full flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <input
            type="name"
            className="border-gray300 borde w-full rounded-full border px-4 py-2"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="border-gray300 borde w-full rounded-full border px-4 py-2"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="border-gray300 w-full rounded-full border px-4 py-2"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-primary-400 w-full cursor-pointer rounded-full border-gray-300 px-4 py-2 font-bold text-white">
            Registrar
          </button>
        </form>
        <p>
          Já tem uma conta?{" "}
          <Link to="/login" className="font-semibold underline">
            Clique aqui para logar
          </Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default Register;
