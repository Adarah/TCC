import { Login, LoginForm } from "react-admin";
import ForgotPasswordButton from '../components/auth/forgot-password';
import GoogleSignIn from "../components/auth/google-sign-in";


const CustomLoginForm = (props: any) => (
    <div>
        <LoginForm {...props} />
        <ForgotPasswordButton />
        <GoogleSignIn/>
    </div>
);

const CustomLoginPage = (props: any) => (
    <Login {...props}>
        <CustomLoginForm {...props} />
    </Login>
);

export default CustomLoginPage;
