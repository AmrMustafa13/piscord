import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyingEmail = () => {
  const location = useLocation();

  const token = location.search.split("?token=")[1];

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_ROOT_URL}/verify?token=${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "Success") {
          toast.success("Email verified successfully");
        } else if (data.status === "Fail") {
          toast.error(data.message);
        }
        setTimeout(() => {
          window.close();
        }, 4000);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-primary text-white min-h-screen flex justify-center items-center text-5xl font-semibold">
      <h1 className="animate-pulse">Verifying email...</h1>
    </div>
  );
};

export default VerifyingEmail;
