import { useState } from "react";
import { fetchGitHub } from "../services/login";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleFetchProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const githubData = await fetchGitHub(email);
    localStorage.profileData = JSON.stringify(githubData);
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("profileData");
    navigate("/auth");
  };

  return {
    email,
    setEmail,
    handleFetchProfile,
    handleLogout,
  };
};
