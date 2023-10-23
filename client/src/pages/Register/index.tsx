import TextInput from "@/components/form/TextInput";
import backgroundImage from "@/assets/images/register-background.svg";
import FilledButton from "@/components/FilledButton";
import DateInput from "@/components/form/DateInput";
import { Link } from "react-router-dom";
import CheckBox from "@/components/form/CheckBox";

const Register = () => {
  return (
    <div
      className="grid place-content-center min-h-screen bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <form
        className="p-8 text-white"
        style={{
          width: "480px",
          backgroundColor: "hsl( 223 calc( 1 *6.7%) 20.6% /1)",
        }}
      >
        <h3 className="text-center text-2xl font-light">Create an account</h3>
        <div className="mt-5">
          <TextInput type="email" label="Email" required />
          <TextInput type="text" label="Display Name" />
          <TextInput type="text" label="Username" required />
          <TextInput type="password" label="Password" required />
          <DateInput label="Date Of Birth" required />
          <CheckBox
            label={
              <p className="text-xs" style={{ color: "rgb(148, 155, 164)" }}>
                (Optional) It’s okay to send me emails with Discord updates,
                tips, and special offers. You can opt out at any time.
              </p>
            }
          />
          <FilledButton>Continue</FilledButton>
          <p
            className="text-xs mt-2 font-normal"
            style={{
              color: "rgb(148, 155, 164)",
            }}
          >
            By registering, you agree to Discord's{" "}
            <Link
              to="#"
              style={{
                color: "rgb(0, 168, 252)",
              }}
            >
              Terms of Services
            </Link>{" "}
            and{" "}
            <Link
              to="#"
              style={{
                color: "rgb(0, 168, 252)",
              }}
            >
              Privacy Policy
            </Link>
            .
          </p>
          <Link
            to="/login"
            className="text-sm font-medium inline-block mt-5"
            style={{
              color: "rgb(0, 168, 252)",
              display: "inline-block",
            }}
          >
            Already have and account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
