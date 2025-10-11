
import { useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../hooks/useAuth';
import useAxiosPublic from '../hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const GoogleSignIn = () => {
    const { googleLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const axiosPublic = useAxiosPublic();

    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log("Google sign in successful:", user);
                toast.success("Signed in with Google successfully!");

                // Save user data to database
                const userInfo = {
                    name: user?.displayName,
                    email: user?.email,
                    photo: user?.photoURL,
                };

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log("User data saved to database:", res.data);
                        navigate(from, { replace: true });
                    })
                    .catch(err => {
                        console.error('Error saving user to database:', err);
                        // Still navigate even if database save fails
                        navigate(from, { replace: true });
                    });
            })
            .catch(error => {
                console.error('Google SignIn error:', error);
                toast.error("Failed to sign in with Google. Please try again.");
            });
    };

    return (
        <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline btn-primary w-full"
        >
            <FcGoogle size={20} />
            Continue with Google
        </button>
    );
};

export default GoogleSignIn;