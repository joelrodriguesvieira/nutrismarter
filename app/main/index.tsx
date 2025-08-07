import LogoNutriSmarter from "@/components/logo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";
import { useUser } from "../contexts/useContext";
import { styles } from "../register/register.style";

export default function MainPage() {
  const { userName } = useUser();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerForm}>
        <LogoNutriSmarter />
        <View style={styles2.profileIconWrapper}>
          <FontAwesome name="user" size={80} color={colors.gray} />
        </View>
        <Text style={styles2.userName}>{userName || "Usuário"}</Text>
        <TouchableOpacity style={[styles.backButton, { marginTop: 0 }]}>
          <Text style={styles.backText}>EDITAR PERFIL</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainForm}>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => router.push("/suggestion")}
        >
          <Text style={styles.confirmText}>Receber sugestão</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmText}>Visualizar Dieta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => router.push("/food-list")}
        >
          <Text style={styles.confirmText}>Visualizar alimentos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles2 = StyleSheet.create({
  userName: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  profileIconWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: colors.orangePrimary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
});
