import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { AuthProvider } from "./contexts/AuthContext";
import AosAnimation from "./components/AosAnimation";
import GoToTopButton from "./components/GoToTopButton";

function App() {
  return (
    <AuthProvider>
      <AosAnimation>
        <RouterProvider router={routes} />
        <GoToTopButton />
      </AosAnimation>
    </AuthProvider>
  );
}

export default App;
