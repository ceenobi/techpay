import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes/approutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./store/AuthProvider";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter(routes);
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
