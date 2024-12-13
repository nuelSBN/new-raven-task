import Header from "../../components/header";
import CryptoCard from "../../components/crypto-card";
import Content from "../../components/content";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("profileData");

    if (!user) {
      navigate("/auth", { replace: true });
      return;
    } else {
      setIsLoading(false);
    }
  }, [navigate]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <span> Loading...</span>
      </div>
    );
  }

  return (
    <main>
      <Header />
      <CryptoCard />
      <Content />
    </main>
  );
}
