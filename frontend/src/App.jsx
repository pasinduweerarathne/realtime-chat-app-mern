import {
  SignInButton,
  SignUpButton,
  UserButton,
  Show,
  useAuth,
} from "@clerk/react";
import { Button } from "@heroui/react";
import { Navigate, Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import AuthPage from "./pages/AuthPage";
import { WallpaperProvider } from "./context/WallpaperContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <ThemeProvider>
      <WallpaperProvider>
        <Routes>
          <Route
            path="/"
            element={
              isSignedIn ? <ChatPage /> : <Navigate to={"/auth"} replace />
            }
          />
          <Route
            path="/auth"
            element={
              !isSignedIn ? <AuthPage /> : <Navigate to={"/chat"} replace />
            }
          />
        </Routes>
      </WallpaperProvider>
    </ThemeProvider>
  );
}

export default App;
