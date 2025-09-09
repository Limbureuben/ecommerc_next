import LoginForm from "../../components/loginForm";

export default function LoginPage() {
    return (
        <LoginForm
            onSwitchToRegister={() => {
                // Add logic to switch to register page
            }}
            onClose={() => {
                // Add logic to close the login form
            }}
        />
    );
}