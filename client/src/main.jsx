import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
