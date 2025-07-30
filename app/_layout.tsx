import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { UserProvider } from "./contexts/useContext";

export default function RootLayout() {
  const [loaded] = useFonts({
    InterLight: require("../assets/fonts/Inter_18pt-Light.ttf"),
    InterSemiBold: require("../assets/fonts/Inter_18pt-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <UserProvider>
        <StatusBar style="auto" />
        <Stack />
      </UserProvider>
    </>
  );
}
