import { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  authenticated: boolean;
  mobile: string;
  sendOtp: (mobile: string) => void;
  verifyOtp: (otp: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("cinema-auth") === "true"
  );

  const [mobile, setMobile] = useState(
    localStorage.getItem("cinema-mobile") || ""
  );

  const sendOtp = (mobileNumber: string) => {
    setMobile(mobileNumber);
    localStorage.setItem("cinema-mobile", mobileNumber);
  };

  const verifyOtp = (otp: string): boolean => {
    // Demo OTP
    if (otp === "123456") {
      setAuthenticated(true);
      localStorage.setItem("cinema-auth", "true");
      return true;
    }

    return false;
  };

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem("cinema-auth");
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        mobile,
        sendOtp,
        verifyOtp,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}