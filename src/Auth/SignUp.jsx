import { Link, useNavigate, useLocation } from "react-router-dom";
import GoogleSignIn from "./GoogleSignIn";
import useAuth from "../hooks/useAuth";
import { imageUpload } from "../api/utils";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";

const SignUp = () => {
    const { loading, createUser, updateProfileData } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];

        console.log(name, email, password);

        // Password validation
        if (!/[A-Z]/.test(password)) {
            return toast.error('Password must contain at least one uppercase letter!');
        }
        if (!/[a-z]/.test(password)) {
            return toast.error("Password must contain at least one lowercase letter!");
        }
        if (password.length < 6) {
            return toast.error("Password must be at least 6 characters long!");
        }

        try {
            // Upload image to ImgBB
            let photoURL = null;
            if (image) {
                photoURL = await imageUpload(image);
            }

            // Create user account
            const result = await createUser(email, password);
            const user = result.user;

            // Update profile with name and photo
            await updateProfileData(name, photoURL);

            console.log("User created successfully:", user);
            toast.success("Account created successfully!");
            navigate(from, { replace: true });
        } catch (error) {
            console.error("Sign up error:", error);
            toast.error("Failed to create account. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="card w-full max-w-md bg-white shadow-2xl">
                <div className="card-body">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-primary mb-2">Sign Up</h1>
                        <p className="text-gray-600">Create your Eventify account</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Enter your full name"
                                className="input input-bordered w-full"
                            />
                        </div>

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
                                placeholder="Create a password"
                                className="input input-bordered w-full"
                            />
                            <label className="label">
                                <span className="label-text-alt text-xs">
                                    Must contain uppercase, lowercase, and be at least 6 characters
                                </span>
                            </label>
                        </div>

                        {/* Profile Image */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Picture (Optional)</span>
                            </label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                className="file-input file-input-bordered w-full"
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
                                        <span>Creating Account...</span>
                                    </div>
                                ) : (
                                    'Create Account'
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="divider">OR</div>

                    {/* Google Sign In */}
                    <GoogleSignIn />

                    {/* Sign In Link */}
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link
                                to="/signIn"
                                className="link link-primary font-semibold"
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;