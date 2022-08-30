import logo from "./logo.svg";
import "./App.css";
import Cars from "./Cars";

import { QueryClientProvider, QueryClient, useQuery } from "react-query";


const queryClient = new QueryClient();

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Cars></Cars>
      </div>
    </QueryClientProvider>
  );
}

export default App;
