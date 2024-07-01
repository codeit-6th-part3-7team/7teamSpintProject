import Header from "@/src/components/Header";
import "@/src/styles/globals.css";
import theme from "@/src/styles/theme";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Notifications position="top-right" />
      <Header />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
