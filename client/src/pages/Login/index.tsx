import TextInput from "@/components/form/TextInput";
import backgroundImage from "@/assets/images/register-background.svg";
import FilledButton from "@/components/FilledButton";
import qrCode from "@/assets/images/qr-code.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="grid place-content-center min-h-screen bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div
        className="p-8 text-white flex justify-between gap-16"
        style={{
          backgroundColor: "hsl( 223 calc( 1 *6.7%) 20.6% /1)",
        }}
      >
        <form
          style={{
            width: "414px",
          }}
        >
          <h3 className="text-center text-2xl font-light mb-2">
            Welcome back!
          </h3>
          <p
            className="text-center text-base"
            style={{
              color: "rgb(181, 186, 193)",
            }}
          >
            We're so excited to see you again!
          </p>
          <div className="mt-5">
            <TextInput type="email" label="Email or Phone Number" required />
            <TextInput type="password" label="Password" required />
            <FilledButton>Log In</FilledButton>
            <p
              className="text-base"
              style={{
                color: "rgb(148, 155, 164)",
              }}
            >
              Need an account?{" "}
              <Link
                to="/register"
                className="text-sm font-medium inline-block mt-5"
                style={{
                  color: "rgb(0, 168, 252)",
                  display: "inline-block",
                }}
              >
                Register
              </Link>
            </p>
          </div>
        </form>
        <div className="grid place-content-center items-center justify-center justify-items-center w-60">
          <img src={qrCode} className="mb-8" />
          <h3 className="text-2xl font-semibold mb-2">Log in with QR Code</h3>
          <p
            className="text-base text-center"
            style={{
              color: "rgb(181, 186, 193)",
            }}
          >
            Scan this with the{" "}
            <span className="font-bold">Discord mobile app</span> to log in
            instantly
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
