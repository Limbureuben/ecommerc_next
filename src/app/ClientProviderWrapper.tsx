"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

export default function ClientProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <SessionProvider>
      {children}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerStyle={{ top: 20, right: 20 }}
      />
      </SessionProvider>
    </Provider>
  );
}
