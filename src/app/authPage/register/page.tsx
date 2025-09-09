import RegisterForm from "../../components/registerForm";


export default function RegisterPage() {
    return (
        <RegisterForm
            onSwitchToLogin={() => {
                // Implement logic to switch to login page
            }}
            onClose={() => {
                // Implement logic to close the register form
            }}
        />
    );
}