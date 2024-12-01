import { useNavigate } from "react-router";
import {useLogoutMutation} from "../redux/api/userApiSlice"
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logout } from "../redux/features/authSlice";


function Auth() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [logoutApiCall] = useLogoutMutation()

    const logoutHandler = async () => {
        try {
             await logoutApiCall().unwrap();
            dispatch(logout());
            navigate("/loggedin")
        } catch (error) {
            console.log(error);
            console.error(error);
            toast.error(error?.data?.message || error.error)
        }
    }
  return (
      <div>
          Logout the user 
<button onClick={logoutHandler} className="p-3 bg-red-600">logout</button>
    </div>
  )
}

export default Auth