import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { AuthProvider } from "./contexts/AuthContext";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import GoToTopButton from "./pages/Shared/GoToTopButton/GoToTopButton";

function App() {
  const queryClient = new QueryClient();
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
        <GoToTopButton />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
