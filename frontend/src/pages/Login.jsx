import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {useLoginMutation} from "../redux/api/userApiSlice"
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { setCredientials } from "../redux/features/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation()
  
  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation()
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/loggedin"
  
  useEffect(() => {
    if (userInfo) {
        navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredientials({ ...res }));
      toast.success("user login successfully")
    } catch (err) {
      toast.error(err?.data?.message || err.error);

    }
  }


  return (
    <div className="lg:flex ">
      <div className="hidden lg:block " >
        <img src="./img1.jpg" className="w-[60vw] h-[95vh] m-4 rounded-xl" />
      </div>

      <div className="md:py-[8rem] md:px-[1rem] lg:w-[35vw] bg-white shadow-xl rounded-xl py-[9rem] my-3 mx-3">
        <h2 className="font-bold text-2xl px-4 md:text-3xl lg:text-3xl">Login</h2>
        <form onSubmit={submitHandler}>

          <div className="flex flex-col px-4 mt-3">
            <label htmlFor="email" className="md:text-xl md:mb-2 lg:text-lg  lg:mb-1">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="rounded-lg border py-1 px-3 md:text-lg" placeholder="enter your email..." id="email" />
          </div>

          <div className="flex flex-col px-4 mt-3">
            <label htmlFor="password" className="md:text-xl md:mb-2 lg:text-lg lg:mb-1">Password</label>
            <input type="password" required className="rounded-lg border py-1 px-3 md:text-lg" placeholder="enter your password..." id="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
          </div>


          <div className="px-3">
            <button type="submit" disabled={isLoading} className="bg-green-900 hover:bg-green-700 text-white w-full mt-3 rounded-md p-1 sm:p-2  ">{isLoading ? "Login...":"Login" }</button>
            <p className="text-center mt-3 font-semibold">have an account? <Link to="/signup" className="text-orange-600 text-sm">Sign up for free.</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login