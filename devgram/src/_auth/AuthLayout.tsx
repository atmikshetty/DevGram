import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <img
            src="/assets/images/bg-temp1.jpg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />

          <section className="flex flex-1 justify-center items-center flex-col py-10">
            {/* Renders what must be present if the user is not signed up */}
            <Outlet />
          </section>
        </>
      )}
    </>
  );
};

export default AuthLayout;
