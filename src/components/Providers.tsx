import { NextUIProvider } from "@nextui-org/react";
import * as React from "react";
import {
  ToastContainer,
  toast,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextUIProvider>
      <ToastContainer
        position="bottom-right"
        hideProgressBar
      />
      {children}

    </NextUIProvider>
  );
}
