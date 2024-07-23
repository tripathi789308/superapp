import React, { useMemo } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";

const HomePage = () => {
  const navigate = useNavigate();
  const cards = useMemo(
    () => [
      {
        title: "File Manager",
        description: "Demo to show how folder and file structure looks like.",
        buttonText: "Open",
        iconSrc:
          "https://github.com/user-attachments/assets/77a40155-89f9-4a87-81f9-78032efa2fb8",
        onClick: () => navigate("/file-manager"),
      },
      {
        title: "Pagination Demo",
        description:
          "Demo to show how pagination works. Built using reactjs and sample API.",
        buttonText: "Open",
        iconSrc:
          "https://github.com/user-attachments/assets/f7aea18b-beb9-4566-ae9f-cd9af9063922",
        onClick: () => navigate("/pagination"),
      },
      {
        title: "Play Sudoko",
        description: "Play Sudoko. Built using reactjs",
        buttonText: "Open",
        iconSrc:
          "https://github.com/user-attachments/assets/eb1adb60-6f86-428e-b77d-46468e30dfcc",
        onClick: () => navigate("/sudoko"),
      },
      {
        title: "Password Generator",
        description:
          "Generate a password by selecting character ,symbols and length you wanted. Built using reactjs",
        buttonText: "Open",
        iconSrc:
          "https://github.com/user-attachments/assets/fb6968a8-a6d6-498e-85c6-b5d31e54de31",
        onClick: () => navigate("/password-generator"),
      },
      {
        title: "EMI Calculator",
        description:
          "Generate a EMI plan using you personal EMI calculator. Built using reactjs",
        buttonText: "Open",
        iconSrc:
          "https://github.com/user-attachments/assets/c5a5e346-d8e6-4c02-9345-1e01f647f5ac",
        onClick: () => navigate("/emi-calculator"),
      },
    ],
    []
  );

  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export { HomePage };
