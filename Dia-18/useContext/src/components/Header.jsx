import { UserContext } from "@/context/userContext";
import { useContext } from "react";

export const Header = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <>
            {user ? (
                <button onClick={logout}>Logout {user.name}</button>
            ) : (
                <button>Login</button>
            )}
        </>
    );
}