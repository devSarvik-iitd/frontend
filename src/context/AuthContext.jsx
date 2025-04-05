import { createContext, useState, useEffect, useContext } from "react";
import config from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // Helper to get cookie by name
  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  };

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
  
    try {
      const res = await fetch(`${config.baseURL}/user/dashboard`, {
        method: "GET",
        credentials: "include", // 👈 send cookies
      });
  
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
  
      const resData = await res.json();
  
      if (resData.user) {
        setUser(resData.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  


  useEffect(() => {
    fetchUser();
  }, []);

  const login = async () => {
    await fetchUser();
  };

  const logout = async () => {
    try {
      const res = await fetch(`${config.baseURL}/user/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to logout");

      setUser(null);
      // Optionally: localStorage.removeItem("user");
    } catch (error) {
      console.error("Logout error:", error);
      setError("Logout failed");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser, // expose this
        loading,
        error,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );

};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
