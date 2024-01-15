import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./shared/components/navigation/Layout";
import Products from "./products/pages/Products";
import Customers from "./users/pages/Customers";
import Orders from "./products/pages/Orders";
import Dashboard from "./products/pages/Dashboard";
import Login from "./users/pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" exact element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="customers" element={<Customers />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </Router>
    // <div>
    //   <h1>Hello World</h1>
    // </div>
  );
}

export default App;
