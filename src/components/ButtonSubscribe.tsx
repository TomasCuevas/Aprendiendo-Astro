import { useState } from "react";
import { toast } from "react-toastify";

export const ButtonSubscribe: React.FC = () => {
  const [subscribe, setSubscribe] = useState(false);

  return (
    <button
      onClick={() => {
        subscribe
          ? toast.warn("Haz cancelado tu suscripción")
          : toast.success("Felicidades, ya estas suscrito");
        setSubscribe((prev) => !prev);
      }}
    >
      {subscribe ? "Ya estas suscrito" : "Click para suscribirte"}
    </button>
  );
};
