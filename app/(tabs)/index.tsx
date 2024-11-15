import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import "@/global.css";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { useAuth } from "@/src/context/authContext";
import Festivity from "@/app/(tabs)/festivity/index";
import TypicalDish from "@/app/(tabs)/typical_dish/index";
import Places from "@/app/(tabs)/places/index";
import QrScanner from "@/src/components/qr";
import Home from "@/src/ui/Home";
import ItinerarioResultados from "@/src/components/itinerario/ItinerarioResultados";

export default function HomeScreen() {
  const route = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    const response: any = await logout();

    if (response.succes) {
      route.navigate("/(auth)/login");
    } else {
      alert(response.error);
    }
  };

  return (
    <ScrollView  className="flex-1 p-5 gap-4">
      {/* <Text>This is the page home</Text>
      <View className="gap-2">
        <Text className="font-bold">
        </Text>
        <Text className="text-neutral-600">{user?.email}</Text>
        <Text className="text-neutral-600">{user?.uid}</Text>
      </View>
      <View className="flex-row">
        <TouchableOpacity
          className="px-4 py-1 rounded-md bg-cyan-700 "
          onPress={handleLogout}
        >
          <Text className="text-white">Logout</Text>
        </TouchableOpacity>
      </View>
      <ItinerarioResultados /> */}
      <Home />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
