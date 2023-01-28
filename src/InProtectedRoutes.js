import { Navigate,Outlet } from "react-router-dom";

const auth = () =>{
    return localStorage.getItem("token")
}

const ProtectedRoutes = () => {

    const authh = auth();
    return (authh ? <Outlet /> :  <Navigate to="/" />)
}
export default ProtectedRoutes;
