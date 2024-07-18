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
          "https://github.com/user-attachments/assets/580588d8-dee4-4ee8-bd84-7ba1af60d0ea",
        onClick: () => navigate("/file-manager"),
      },
    ],
    []
  );

  return (
    <div>
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export { HomePage };
