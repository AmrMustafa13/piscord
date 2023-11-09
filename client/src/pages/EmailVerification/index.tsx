import { Link } from "react-router-dom";

const EmailVerification = () => {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-6 bg-primary text-tx-primary">
      <h1 className="text-3xl text-center font-bold">
        An email has been sent to your email address. Please verify your email address to continue.
      </h1>
      <Link to="/login" className="p-2 rounded-md text-lg bg-complementary">
        Continue to login
      </Link>
    </div>
  );
};

export default EmailVerification;
