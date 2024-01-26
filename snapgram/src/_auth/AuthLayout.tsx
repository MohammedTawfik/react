import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <Navigate to="/" />
        </div>
      ) : (
        <>
          <section className="flex flex-col justify-center items-center flex-1 py-10">
            <Outlet />
          </section>
        </>
      )}
    </div>
  );
};

export default AuthLayout;
