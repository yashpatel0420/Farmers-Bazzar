import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import "./asset/css/bootstrap.min.css";
import Login from "./pages/Login";
import VendorPage from "./pages/VendorPage";
import ProductPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductAddForm from "./pages/ProductAddFrorm";
import VendorPrivateRoute from "./components/VendorPrivateRoute";
import CartPage from "./pages/CartPage";
import Demo from "./pages/demo";
import ProfilePage from "./pages/ProfilePage";
import CheckoutPage from "./pages/CheckoutPage";
import CustomerLogin from "./pages/CustomerLogin";
import AboutUsPage from "./pages/AboutUsPage";
import CustomerPrivateRoute from "./components/CustomerPrivateRoute";
import VedCustomerPrivateRoute from "./components/vedCustomerPrivateRoute";
import InvoicePage from "./pages/invoicePage";
import AdminHome from "./pages/Admin/adminHome";
import AdminVendors from "./pages/Admin/adminVendors";
import AdminOrders from "./pages/Admin/adminOrder";
import AdminCustomers from "./pages/Admin/AdminCustomers";
import AdminProducts from "./pages/Admin/adminProducts";
import AdminCreateUser from "./pages/Admin/adminCreateUser";
import AdminCreateOrder from "./pages/Admin/adminCreateOrder";
import AdminCreateProduct from "./pages/Admin/adminCreateProduct";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vendors" element={<VendorPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/vendor/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/demo" element={<Demo />} />

        <Route
          path="/admin"
          element={
            <AdminPrivateRoute>
              <AdminHome />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/order"
          element={
            <AdminPrivateRoute>
              <AdminOrders />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/vendor"
          element={
            <AdminPrivateRoute>
              <AdminVendors />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/customer"
          element={
            <AdminPrivateRoute>
              <AdminCustomers />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/product"
          element={
            <AdminPrivateRoute>
              <AdminProducts />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/createUser/:user"
          element={
            <AdminPrivateRoute>
              <AdminCreateUser />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/createOreder"
          element={
            <AdminPrivateRoute>
              <AdminCreateOrder />
            </AdminPrivateRoute>
          }
        />
        <Route
          path="/admin/createProduct"
          element={
            <AdminPrivateRoute>
              <AdminCreateProduct />
            </AdminPrivateRoute>
          }
        />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/profile"
          element={
            <VedCustomerPrivateRoute>
              <ProfilePage />
            </VedCustomerPrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <CustomerPrivateRoute>
              <CheckoutPage />
            </CustomerPrivateRoute>
          }
        />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/invoice" element={<InvoicePage />} />
        <Route path="/customer/login" element={<CustomerLogin />} />

        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route
          path="/product-add-form"
          element={
            <VendorPrivateRoute>
              <ProductAddForm />
            </VendorPrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
