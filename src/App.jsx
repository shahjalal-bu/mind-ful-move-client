import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { AuthProvider } from "./contexts/AuthContext";
import AosAnimation from "./components/AosAnimation";
import GoToTopButton from "./components/GoToTopButton";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AosAnimation>
          <RouterProvider router={routes} />
          <GoToTopButton />
        </AosAnimation>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
