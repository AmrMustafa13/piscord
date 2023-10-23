import TextInput from "@/components/form/TextInput";
import backgroundImage from "@/assets/images/register-background.svg";
import FilledButton from "@/components/FilledButton";
import DateInput from "@/components/form/DateInput";
import { Link } from "react-router-dom";
import CheckBox from "@/components/form/CheckBox";

const Register = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <form
        style={{
          width: "480px",
          backgroundColor: "hsl( 223 calc( 1 *6.7%) 20.6% /1)",
          padding: "32px",
          color: "white",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            fontSize: "24px",
            lineHeight: "30px",
            fontWeight: "300",
          }}
        >
          Create an account
        </h3>
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <TextInput type="email" label="Email" required />
          <TextInput type="text" label="Display Name" />
          <TextInput type="text" label="Username" required />
          <TextInput type="password" label="Password" required />
          <DateInput label="Date Of Birth" required />
          <CheckBox
            label={
              <p style={{ color: "rgb(148, 155, 164)", fontSize: "12px" }}>
                (Optional) It’s okay to send me emails with Discord updates,
                tips, and special offers. You can opt out at any time.
              </p>
            }
          />
          <FilledButton>Continue</FilledButton>
          <p
            style={{
              fontSize: "12px",
              lineHeight: "16px",
              marginTop: "8px",
              fontWeight: "400",
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
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "rgb(0, 168, 252)",
              display: "inline-block",
              marginTop: "20px",
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
