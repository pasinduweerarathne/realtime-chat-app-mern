import {
  SignInButton,
  SignUpButton,
  UserButton,
  Show,
  useAuth,
} from "@clerk/react";
import { Button } from "@heroui/react";
import { ThemeProvider } from "./context/themeContext";
import { WallpaperProvider } from "./context/WallpaperContext";
import { Navigate, Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import AuthPage from "./pages/AuthPage";

function App() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return "Loading...";

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
