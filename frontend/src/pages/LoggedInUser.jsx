import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import Auth from "./Auth";
const LoggedInUser = () => {
    const {userInfo} = useSelector(state => state.auth)

 return userInfo ? <Auth/>:<Navigate to="/login" replace/>
}

export default LoggedInUser