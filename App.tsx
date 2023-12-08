import { StatusBar } from "expo-status-bar";
import { LoginPage } from "./src/screens/login";
import { LandPage } from "./src/screens/landpage";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <LandPage />
    </>
  );
}


