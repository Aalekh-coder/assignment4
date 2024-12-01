import { Link } from "react-router-dom";
const Home = () => {
  return (
      <div className="flex items-center justify-between w-[15rem] mx-auto mt-[45vh]">
         <Link to="/login" className="bg-green-500 p-4 rounded-full">Login</Link>
         <Link to="/signup" className="bg-yellow-400 p-4 rounded-full">SignUp</Link>
    </div>
  )
}

export default Home