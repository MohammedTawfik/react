import { Route, Routes } from "react-router-dom";
import SigninForm from "./_auth/forms/SigninForm";
import { Home } from "./_root/pages";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/Rootlayout";

const app = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes (any one can access) */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* Private Routes (only registered users can access) */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default app;
