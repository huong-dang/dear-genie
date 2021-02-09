import React from "react";
import Header from "../components/header";

// import { useSession } from "next-auth/client";

export default function Dashboard() {
    // const [session, loading] = useSession();

    // var content = session ? <Success /> : <Unauthorized />;

    return (
        <div className="container">
            <Header />
        </div>
    );
}
