import useScreen, { ScreenProvider } from "./context/AppContext";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Day001LoginScreen from "@/challenges/day-001-login-screen/screen";
import Day002ForgetPasswordScreen from "@/challenges/day-002-forget-password-screen";

// Your screens
const screens = [
  { day: "Day 001", name: "Login Screen", component: Day001LoginScreen },
  {
    day: "Day 002",
    name: "Forgot Password Screen",
    component: Day002ForgetPasswordScreen,
  },
  // add more here later
];

function AppContent() {
  const { selectedScreen, setSelectedScreen } = useScreen();

  if (selectedScreen !== null) {
    const ScreenComponent = screens[selectedScreen].component;
    return (
      <View style={{ flex: 1 }}>
        <ScreenComponent />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          🎯 Pick a Challenge
        </Text>

        {screens.map((screen, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: "#f7f7f7",
              padding: 16,
              borderRadius: 12,
              marginBottom: 16,
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => setSelectedScreen(index)}
          >
            <Text style={{ fontSize: 32, marginRight: 12 }}>🚀</Text>
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {screen.day}
              </Text>
              <Text style={{ fontSize: 14, color: "#666" }}>{screen.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <ScreenProvider>
      <AppContent />
    </ScreenProvider>
  );
}
