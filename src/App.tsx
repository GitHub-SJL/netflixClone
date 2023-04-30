import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Routes/Root";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";
function App() {
  const client = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "movies/:id",
          element: <Home />,
        },
        {
          path: "tv",
          element: <Tv />,
        },
        {
          path: "search",
          element: <Search />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
