import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllContactsPage from "./pages/AllContactsPage";
import ContactFormPage from "./pages/ContactFormPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Layout from "./components/Layout";
import AdminDashboard from "./pages/AdminDashboard";


function App() {
  return (
    <BrowserRouter>

      <Layout>
        <Routes>
          <Route path="/" element={<ContactFormPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={<AdminDashboard />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contacts" element={<AllContactsPage />} />
        </Routes>
      </Layout>


    </BrowserRouter>
  );
}

export default App;