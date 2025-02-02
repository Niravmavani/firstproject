import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  // const data = [
  //   "/forgot-password",
  //   "/otp-verification",
  //   "/new-password",
  //   "/password-otp",
  //   "/register",
  // ];
  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log("dsfdfs", router.pathname);
    if (
      token &&
      (router.pathname === "/login" ||
        router.pathname === "/register" ||
        router.pathname === "/")
    ) {
      router.push("/product");
      // } else {
      //   if (!token && !data.includes(router.pathname)) {
      //     router.push("/login");
      //   }
    }
  }, [router]);
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
}
