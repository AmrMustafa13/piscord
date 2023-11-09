import TextInput from "@/components/form/TextInput";
import backgroundImage from "@/assets/images/register-background.svg";
import FilledButton from "@/components/FilledButton";
import DateInput from "@/components/form/DateInput";
import { Link, useNavigate } from "react-router-dom";
import CheckBox from "@/components/form/CheckBox";
import { toast } from "react-toastify";

interface ContactDate {
  day: string;
  month: string;
  year: string;
}

const concatDate = ({ day, month, year }: ContactDate) => {
  return `${year}-${month}-${day}`;
};

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const day = formData.get("day");
    const month = formData.get("month");
    const year = formData.get("year");
    formData.set(
      "dateOfBirth",
      concatDate({ day: day as string, month: month as string, year: year as string })
    );
    formData.delete("day");
    formData.delete("month");
    formData.delete("year");
    const data = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_API_ROOT_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
          return;
        }
        toast.success("Account created successfully");
        navigate("/email-verification");
      })
      .catch((err) => console.log(err));
  };

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
        onSubmit={handleRegister}
      >
        <h3 className="text-center text-2xl font-light">Create an account</h3>
        <div className="mt-5">
          <TextInput type="email" label="Email" required name="email" />
          <TextInput type="text" label="Display Name" name="nickName" />
          <TextInput type="text" label="Username" required name="userName" />
          <TextInput type="password" label="Password" required name="password" />
          <DateInput label="Date Of Birth" required />
          <CheckBox
            label={
              <p className="text-xs" style={{ color: "rgb(148, 155, 164)" }}>
                (Optional) It’s okay to send me emails with Discord updates, tips, and special
                offers. You can opt out at any time.
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
