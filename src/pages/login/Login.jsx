import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TbEye, TbEyeClosed } from "react-icons/tb";
import { Context } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [passwordVisiblity, setPasswordVisiblity] = useState("password");
  const [passwordTrigger, setPasswordTrigger] = useState(false);
  const navigate = useNavigate()
  const {login, postLocalDataInDB} = useContext(Context)
  const location = useLocation()

  console.log(location?.state)

  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const {email, password} = data

    login(email, password)
    .then(()=>{
      postLocalDataInDB(email)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Welcome",
        showConfirmButton: false,
        timer: 1500
      })
      if(location?.state){
        if(location?.state === "/check_out")
        navigate("/cart")
      }
      else
      navigate(location?.state ? location?.state: '/')
    })
  };

  const handlePassword = () => {
    setPasswordTrigger(!passwordTrigger);
    if (passwordTrigger) {
      setPasswordVisiblity("password");
    } else {
      setPasswordVisiblity("text");
    }
  };

  return (
    <div
      className="my-myMargin w-full flex justify-center "
    >
      <div className="p-10 shadow-xl bg-black  rounded-lg bg-opacity-20">
        <h2 className="text-textColor text-2xl font-medium pb-3 border-b mb-5">Login Now</h2>
        <form onSubmit={handleSubmit(onSubmit)} className=" ">
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            type="email"
            className="w-64 md:w-80 h-10 px-2"
          />
          <br />
          {errors.email && (
            <span className="text-red-700">Email is required</span>
          )}{" "}
          <br />
          <input
            {...register("password", { required: true })}
            placeholder="Password"
            type={passwordVisiblity}
            className="w-64 md:w-80 h-10 px-2 rounded "
          />
          <TbEye
            onClick={handlePassword}
            className={` inline -ml-7 text-2xl ${
              passwordTrigger ? "hidden" : ""
            }`}
          />
          <TbEyeClosed
            onClick={handlePassword}
            className={`inline -ml-7 text-2xl ${
              passwordTrigger ? "" : "hidden"
            }`}
          />
          <br />
          {errors.password && (
            <span className="text-red-700">Password is required</span>
          )}
          <br />
          <input
            type="submit"
            value="Login"
            className="mt-5 btn text-black font-bold bg-gradient-to-r from-yellow-700 to-yellow-600"
          />
        </form>
        <p className="mt-8 text-black">
          Dont&apos;t have an account?
          <Link className="underline" to="/register">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
