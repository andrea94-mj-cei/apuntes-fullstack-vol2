const Login = () => {
    return ( 
        <>
        <h2>Login</h2>
        <form action="post">
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Contraseña"/>
            <input type="submit" />
        </form>
        </>
     );
}
 
export default Login;