import { UserContext } from "@/context/userContext";
import { useContext } from "react";

export const Content = () => {
    const { user, login } = useContext(UserContext);

    return ( 
        <>
            {user ? (
                <p>Hola, {user.name}!</p>
            ) : (
                <button onClick={() => login("Andrea")}>Login</button>
            )}
        </>
    );
}