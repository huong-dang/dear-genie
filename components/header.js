import LoginButton from "./login";
import LogoutButton from "./logout";
import { useAuth0 } from "@auth0/auth0-react";
export default function Header() {
    const { isAuthenticated } = useAuth0();
    const button = isAuthenticated ? <LogoutButton /> : <LoginButton />;
    return button;
}
