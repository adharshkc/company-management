

const Login = () => {
  return (

<div className="flex justify-center">

<div className="my-16 left-52 w-full max-w-sm p-8 bg-[#EDE8F5] bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
    
      <h1 className="text-2xl font-semibold text-[#212529] text-center">LOGIN</h1>
        <h5 className=" font-medium my-3 text-lg text-center text-[#7A7C7F]">Access to the Dashboard</h5>
        <div className="my-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
        </div>
        <div className="my-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="flex items-start">
            <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? 
        </div>
</div>
</div>

  );
};

export default Login;
