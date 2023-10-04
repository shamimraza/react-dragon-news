import { Link } from "react-router-dom";
import NavBar from "../shaire/navbar/NavBar";

const Login = () => {
  return (
    <div className=" h-screen bg-[#F3F3F3]">
      <NavBar></NavBar>
      <div className="md:w-3/4 lg:w-1/2 mt-36 rounded mx-auto shrink-0 shadow p-4 bg-[#FFF]">
        <h2 className="text-center font-medium mt-3">Login your account</h2>
        <div className="text-red-400 mt-4 w-10/12 mx-auto">
          <hr />
        </div>
        <form className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center">
          do not Have An Account?{" "}
          <Link to="/register">
            <span className="text-orange-300 ">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;