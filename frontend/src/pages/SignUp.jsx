// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useRegisterMutation } from "../redux/api/userApiSlice"
// import { setCredientials } from "../redux/features/authSlice"
// import { toast } from "react-toastify"

// const SignUp = () => {
//     const [fullName, setFullName] = useState("");
//     const [email, setEmail] = useState("");
//     const [dob, setDob] = useState("");
//     const [phone, setPhone] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmpassword, setConfirmpassword] = useState("");


//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [register, { isLoading }] = useRegisterMutation();

//     const { userInfo } = useSelector((state) => state.auth);

//     const { search } = useLocation()
//     const sp = new URLSearchParams(search);
//     const redirect = sp.get("redirect") || "/loggedin"


//     useEffect(() => {
//         if (userInfo) {
//             navigate(redirect);
//         }
//     }, [navigate, redirect, userInfo]);

//  // Example in the SignUp component
// const submitHandler = async (e) => {
//     e.preventDefault();


//     // Ensure passwords match before proceeding
//     if (password !== confirmpassword) {
//         toast.error("Passwords do not match");
//         return;
//     }

//     try {
//         const res = await register({
//             fullName,
//             email,
//             password,
//             dob,
//             phone
//         }).unwrap();

//         dispatch(setCredientials({ ...res }));
//         navigate(redirect);
//         toast.success("User successfully registered");
//     } catch (err) {
//         toast.error(err.data.message);
//         console.error(err);
//     }
// };


//     return (
//         <div className="lg:flex lg:gap-5">
//             <div className="hidden lg:block lg:mx-1" >
//                 <img src="./img2.jpg" className="w-[60vw] h-[100vh] m-4 rounded-2xl lg:h-[95vh] " />
//             </div>

//             <div className="md:py-[1.5rem] md:px-[1rem] lg:w-[38vw] bg-white shadow-xl rounded-xl py-[5px] my-3 mx-3 lg:my-[1rem] lg:mx-5 lg:m-10 lg:h-[95vh] lg:px-0">
//                 <h2 className="font-bold text-2xl px-4 md:text-3xl lg:text-3xl lg:mt-[7rem]">Create an account!</h2>
//                 <p className="px-4 text-xs lg:text-sm">Enter your details below to create an account and get started</p>
//                 <form onSubmit={submitHandler}>


//                     <div className="lg:flex">
//                         <div className="flex flex-col px-4 mt-3">
//                             <label htmlFor="fullName" className="text-sm md:text-xl md:mb-2 lg:text-[17px] lg:mb-0">Full Name</label>
//                             <input type="fullName" required className="rounded-lg border py-1 px-3 md:text-2xl md:px-5 md:py-2 lg:text-[15px] lg:py-1 lg:px-1.5" placeholder="enter..." id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
//                         </div>
//                         <div className="flex flex-col px-4 mt-3">
//                             <label htmlFor="email" className="text-sm md:text-xl md:mb-2 lg:text-[17px]  lg:mb-0">Email</label>
//                             <input type="email" required className="rounded-lg border py-1 px-3 md:text-2xl md:px-5 md:py-2 lg:text-lg lg:py-1 lg:px-1.5 lg:text-[15px]" placeholder="example@gmail.com" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                         </div>
//                     </div>

//                     <div className="lg:flex">

//                         <div className="flex flex-col px-4 mt-3">
//                             <label htmlFor="password" className="text-sm md:text-xl md:mb-2 lg:text-[17px] lg:mb-1">Password</label>
//                             <input type="text" required className="rounded-lg border py-1 px-3 md:text-2xl md:px-5 md:py-2 lg:text-lg lg:py-1 lg:px-1.5 lg:text-[15px] lg:w-[12rem]" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                         </div>

//                         <div className="flex flex-col px-4 mt-3">
//                             <label htmlFor="confirmpassword" className="text-sm md:text-xl md:mb-2 lg:text-[17px] lg:mb-1">Confirm Password</label>
//                             <input type="password" required className="rounded-lg border py-1 px-3 md:text-2xl md:px-5 md:py-2 lg:text-lg lg:py-1 lg:px-1.5 lg:text-[15px]" placeholder="enter..." id="confirmpassword" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
//                         </div>
//                     </div>

//                     <div className="lg:flex">



//                         <div className="flex flex-col px-4 mt-3">
//                             <label
//                                 htmlFor="dob"
//                                 className="text-sm md:text-xl md:mb-2 lg:text-[17px] lg:mb-1"
//                             >
//                                 Date of Birth
//                             </label>
//                             <input
//                                 type="text"
//                                 required
//                                 className="rounded-lg border py-1 px-3 md:text-2xl md:px-5 md:py-2 lg:text-lg lg:py-1 lg:px-1.5 lg:text-[15px] lg:w-[12rem]"
//                                 id="dob"
//                                 placeholder="MM/DD/YYYY"
//                                 pattern="\d{2}/\d{2}/\d{4}"
//                                 title="Date must be in MM/DD/YYYY format"
//                                 value={dob} onChange={(e) => setDob(e.target.value)}
//                             />
//                         </div>

//                         <div className="flex flex-col px-4 mt-3 mb-3">
//                             <label
//                                 htmlFor="phone"
//                                 className="text-sm md:text-xl md:mb-2 lg:text-[17px] lg:mb-1"
//                             >
//                                 Phone No.
//                             </label>
//                             <input
//                                 type="tel"
//                                 required
//                                 className="rounded-lg border py-1 px-3 md:text-2xl md:px-5 md:py-2 lg:text-lg lg:py-1 lg:px-1.5 lg:text-[15px]"
//                                 placeholder="+91 1234567890"
//                                 id="phone"
//                                 pattern="\+\d{1,3} \d{10}"
//                                 title="Phone number must start with a country code (e.g., +91) followed by a 10-digit number"
//                                 value={phone}
//                                 onChange={(e) => setPhone(e.target.value)}
//                             />
//                         </div>
//                     </div>


//                     <div className="px-3 lg:flex lg:items-center">
//                         <button className="bg-green-900 hover:bg-green-700 text-white w-full mt-1 rounded-md p-1 sm:p-2 md:text-2xl lg:text-lg lg:w-[12.5rem] lg:h-[2.5rem] lg:mr-2">{isLoading ? "Create Account..." : "Create Account"}</button>

//                         <p className="text-center mt-3 font-semibold md:text-2xl lg:text-[13px] lg:mt-0 lg:ml-5">Already have an account? <Link to="/login" className="text-orange-600 text-sm hover:underline md:text-xl lg:text-[12px]">Login</Link></p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default SignUp


import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../redux/api/userApiSlice";
import { setCredientials } from "../redux/features/authSlice";
import { toast } from "react-toastify";

const SignUp = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState(""); // MM/DD/YY format
    const [phone, setPhone] = useState(""); // +91xxxxxxxxxx format
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register, { isLoading }] = useRegisterMutation();

    const { userInfo } = useSelector((state) => state.auth);

    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get("redirect") || "/loggedin";

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();

        // Validate password match
        if (password !== confirmpassword) {
            toast.error("Passwords do not match");
            return;
        }

        // Validate date of birth format
        const dobRegex = /^\d{2}\/\d{2}\/\d{2}$/;
        if (!dobRegex.test(dob)) {
            toast.error("Date of birth must be in MM/DD/YY format");
            return;
        }

        // Validate phone number format
        const phoneRegex = /^\+91\d{10}$/;
        if (!phoneRegex.test(phone)) {
            toast.error("Phone number must start with +91 and be followed by 10 digits");
            return;
        }

        try {
            const res = await register({
                fullName,
                email,
                password,
                dob,
                phone,
            }).unwrap();

            dispatch(setCredientials({ ...res }));
            navigate(redirect);
            toast.success("User successfully registered");
        } catch (err) {
            toast.error(err?.data?.message || "Registration failed");
            console.error(err);
        }
    };

    return (
                <div className="lg:flex lg:gap-5">
                    <div className="hidden lg:block lg:mx-1" >
                        <img src="./img2.jpg" className="w-[60vw] h-[100vh] m-4 rounded-2xl lg:h-[95vh] " />
                    </div>
        
                    <div className="md:py-[1.5rem] md:px-[1rem] lg:w-[38vw] bg-white shadow-xl rounded-xl py-[5px] my-3 mx-3 lg:my-[1rem] lg:mx-5 lg:m-10 lg:h-[95vh] lg:px-0">
                        <h2 className="font-bold text-2xl px-4 md:text-3xl lg:text-3xl lg:mt-[7rem]">Create an account!</h2>
                        <p className="px-4 text-xs lg:text-sm">Enter your details below to create an account and get started</p>
                        <form onSubmit={submitHandler}>
        
        
                            <div className="lg:flex">
                                <div className="flex flex-col px-4 mt-3">
                                    <label htmlFor="fullName" className="text-sm md:text-xl md:mb-2 lg:text-[17px] lg:mb-0">Full Name</label>
                                    <input type="fullName" required className="rounded-lg border py-1 px-3 md:text-2xl md:px-5 md:py-2 lg:text-[15px] lg:py-1 lg:px-1.5" placeholder="enter..." id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                </div>
                                <div className="flex flex-col px-4 mt-3">
                                    <label htmlFor="email" className="text-sm md:text-xl md:mb-2 lg:text-[17px]  lg:mb-0">Email</label>
                                    <input type="email" required className="rounded-lg border py-1 px-3 md:text-2xl md:px-5 md:py-2 lg:text-lg lg:py-1 lg:px-1.5 lg:text-[15px]" placeholder="example@gmail.com" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
        
                            <div className="lg:flex">
        
                                <div className="flex flex-col px-4 mt-3">
                                    <label htmlFor="password" className="text-sm md:text-xl md:mb-2 lg:text-[17px] lg:mb-1">Password</label>
                                    <input type="text" required className="rounded-lg border py-1 px-3 md:text-2xl md:px-5 md:py-2 lg:text-lg lg:py-1 lg:px-1.5 lg:text-[15px] lg:w-[12rem]" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
        
                                <div className="flex flex-col px-4 mt-3">
                                    <label htmlFor="confirmpassword" className="text-sm md:text-xl md:mb-2 lg:text-[17px] lg:mb-1">Confirm Password</label>
                                    <input type="password" required className="rounded-lg border py-1 px-3 md:text-2xl md:px-5 md:py-2 lg:text-lg lg:py-1 lg:px-1.5 lg:text-[15px]" placeholder="enter..." id="confirmpassword" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
                                </div>
                            </div>
        
                            <div className="lg:flex">
        
        
        
                                {/* <div className="flex flex-col px-4 mt-3">
                                    <label
                                        htmlFor="dob"
                                        className="text-sm md:text-xl md:mb-2 lg:text-[17px] lg:mb-1"
                                    >
                                        Date of Birth
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="rounded-lg border py-1 px-3 md:text-2xl md:px-5 md:py-2 lg:text-lg lg:py-1 lg:px-1.5 lg:text-[15px] lg:w-[12rem]"
                                        id="dob"
                                        placeholder="MM/DD/YYYY"
                                        pattern="\d{2}/\d{2}/\d{4}"
                                        title="Date must be in MM/DD/YYYY format"
                                        value={dob} onChange={(e) => setDob(e.target.value)}
                                    />
                                </div> */}
         <div className="flex flex-col px-4 mt-3">
                            <label htmlFor="dob" className="text-sm md:text-xl md:mb-2 lg:text-[17px] lg:mb-1">Date of Birth</label>
                            <input
                                type="text"
                                required
                                className="rounded-lg border py-1 px-3 md:text-2xl md:px-5 md:py-2 lg:text-lg lg:py-1 lg:px-1.5 lg:text-[15px] lg:w-[12rem]"
                                placeholder="MM/DD/YY"
                                id="dob"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                            />
                        </div>
        
        
                                {/* <div className="flex flex-col px-4 mt-3 mb-3">
                                    <label
                                        htmlFor="phone"
                                        className="text-sm md:text-xl md:mb-2 lg:text-[17px] lg:mb-1"
                                    >
                                        Phone No.
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        className="rounded-lg border py-1 px-3 md:text-2xl md:px-5 md:py-2 lg:text-lg lg:py-1 lg:px-1.5 lg:text-[15px]"
                                        placeholder="+91 1234567890"
                                        id="phone"
                                        pattern="\+\d{1,3} \d{10}"
                                        title="Phone number must start with a country code (e.g., +91) followed by a 10-digit number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div> */}
                         <div className="flex flex-col px-4 mt-3">
                            <label htmlFor="phone" className="text-sm md:text-xl md:mb-2 lg:text-[17px] lg:mb-1">Phone No.</label>
                            <input
                                type="tel"
                                required
                                className="rounded-lg border py-1 px-3 md:text-2xl md:px-5 md:py-2 lg:text-lg lg:py-1 lg:px-1.5 lg:text-[15px]"
                                placeholder="+91XXXXXXXXXX"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                            </div>
        
        
                            <div className="px-3 lg:flex lg:items-center lg:mt-3 lg:ml-1">
                                <button className="bg-green-900 hover:bg-green-700 text-white w-full mt-1 rounded-md p-1 sm:p-2 md:text-2xl lg:text-lg lg:w-[12.5rem] lg:h-[2.5rem] lg:mr-2">{isLoading ? "Create Account..." : "Create Account"}</button>
        
                                <p className="text-center mt-3 font-semibold md:text-2xl lg:text-[13px] lg:mt-0 lg:ml-5">Already have an account? <Link to="/login" className="text-orange-600 text-sm hover:underline md:text-xl lg:text-[12px]">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            )
};

export default SignUp;
