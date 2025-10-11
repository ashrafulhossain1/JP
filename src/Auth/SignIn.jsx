import { Link, useNavigate, useLocation } from "react-router-dom";
import GoogleSignIn from "./GoogleSignIn";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";

const SignIn = () => {
    const { loading, signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log("Sign in successful", user);
                toast.success("Sign in successful!");
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error("Sign in error:", error);
                toast.error("Invalid email or password. Please try again.");
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="card w-full max-w-md bg-white shadow-2xl">
                <div className="card-body">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-primary mb-2">Sign In</h1>
                        <p className="text-gray-600">Welcome back to Eventify</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                required
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                                disabled={loading}
                            >
                                {loading ? (
                                    <div className="flex items-center gap-2">
                                        <TbFidgetSpinner className="animate-spin" />
                                        <span>Signing In...</span>
                                    </div>
                                ) : (
                                    'Sign In'
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="divider">OR</div>

                    {/* Google Sign In */}
                    <GoogleSignIn />

                    {/* Sign Up Link */}
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <Link
                                to="/signUp"
                                className="link link-primary font-semibold"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;