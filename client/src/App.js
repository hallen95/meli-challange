import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Router>
      <div>
        <Layout>
          <AppRoutes />
        </Layout>
      </div>
    </Router>
  );
};

export default App;
