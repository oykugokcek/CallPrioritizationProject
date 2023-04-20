import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({});
  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  const handleLogin = () => {
    // Kullanıcı doğrulama işlemini gerçekleştirme
    // API isteği gönderme veya başka bir doğrulama yöntemi kullanma
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-cyan-500 flex justify-center items-center">
      <div className="bg-white w-96 p-8 rounded-md shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Kullanıcı Adı"
            onChange={(e) => handleInputChange(e)}
            className="w-full px-4 py-3 rounded-md mb-4 bg-gray-100 focus:outline-none focus:bg-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Şifre"
            onChange={(e) => handleInputChange(e)}
            className="w-full px-4 py-3 rounded-md mb-6 bg-gray-100 focus:outline-none focus:bg-white"
          />
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-indigo-500 text-white px-4 py-3 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
