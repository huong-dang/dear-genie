import LoginButton from "./login";
import LogoutButton from "./logout";
import { withAuth0 } from "@auth0/auth0-react";
import { Component } from "react";
import axios from "axios";

class Header extends Component {
    async componentDidMount() {
        const result = await axios.get("https://dear-genie-api.vercel.app/");
        console.log(result);
    }

    render() {
        const { isAuthenticated } = this.props.auth0;
        const button = isAuthenticated ? <LogoutButton /> : <LoginButton />;

        return button;
    }
}

export default withAuth0(Header);
