/* import React, { useEffect, useState } from 'react'

const UseToken = () => {
    const [token, setToken] = useState("");

    useEffect(() => {
        setToken(JSON.parse(localStorage.getItem("auth")))
    },[])
  return [token]
}

export default UseToken */


import { useEffect, useState } from 'react';

const UseToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("auth");
    if (storedToken) {
      try {
        setToken(JSON.parse(storedToken)); // JSON parse işlemi kontrol ediliyor
      } catch (error) {
        console.error("Invalid token format:", error);
        setToken(null); // Geçersiz bir token varsa null yap
      }
    }
  }, []);

  return { token, setToken }; // Daha kolay kullanım için setToken da döndürülüyor
};

export default UseToken;

