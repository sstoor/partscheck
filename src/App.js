import logo from "./logo.svg";
import "./App.css";

import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>PartsCheck OEM Suppliers</h1>
        <div className="carpartlist">
          <div className="left">
            <div className="Suppliername">Sup name</div>
            <div className="stars">*****</div>
            <div className="vehiclemake">make, make, make</div>
          </div>
          <div className="right">supplier state</div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
