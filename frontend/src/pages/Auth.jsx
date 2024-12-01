import { useNavigate } from "react-router";
import {useLogoutMutation} from "../redux/api/userApiSlice"
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { logout } from "../redux/features/authSlice";


function Auth() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [logoutApiCall] = useLogoutMutation()

  const { userInfo } = useSelector((state) => state.auth);
console.log(userInfo);

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

          <div>hello thank for opportunity</div>

          <div>
              <p>{userInfo.email}</p>
              <p>{userInfo.dob}</p>

              <p>{userInfo.phone}</p>
              <p>{userInfo._id}</p>
              
          </div>
    </div>
  )
}

export default Auth