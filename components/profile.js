import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

export default function Profile() {
    const {
        user,
        isAuthenticated,
        isLoading,
        getAccessTokenSilently,
    } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);
    useEffect(() => {
        const getUserMetadata = async () => {
            const domain = process.env.NEXT_PUBLIC_DOMAIN;

            try {
                const accessToken = await getAccessTokenSilently({
                    scope: "read:current_user",
                });
                console.log(`accessToken ${accessToken}`);

                const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

                const metadataResponse = await fetch(userDetailsByIdUrl, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                const { user_metadata } = await metadataResponse.json();

                setUserMetadata(user_metadata);
            } catch (e) {
                console.log(e.message);
            }
        };

        getUserMetadata();
    }, []);

    if (isLoading) {
        return <div>Loading ...</div>;
    } else {
        return (
            isAuthenticated && (
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    {userMetadata ? (
                        <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
                    ) : (
                        "No user metadata defined"
                    )}
                </div>
            )
        );
    }
}
