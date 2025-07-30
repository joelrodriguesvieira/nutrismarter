import LogoNutriSmarter from "@/components/Logo";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../constants/colors";

export default function Register() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerForm}>
        <LogoNutriSmarter />
        <Text style={styles.title}>Cadastre-se</Text>
      </View>

      <View style={styles.mainForm}>
        <TextInput
          placeholder="E-mail"
          style={styles.input}
          placeholderTextColor="#888"
        />
        <TextInput
          placeholder="Nome de Usuário"
          style={styles.input}
          placeholderTextColor="#888"
        />
        <TextInput
          placeholder="Crie uma senha"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#888"
        />
        <TextInput
          placeholder="Confirme a senha"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmText}>Confirmar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>VOLTAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteBackground,
    paddingVertical: 40,
    paddingHorizontal: 50,
    justifyContent: "space-evenly",
    gap: 20,
  },
  headerForm: {
    width: "100%",
    display: "flex",
    gap: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 24,
    color: colors.grayThin,
  },
  mainForm: {
    marginBottom: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  input: {
    width: "100%",
    backgroundColor: "#e5e5e5",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 15,
    marginBottom: 12,
  },
  confirmButton: {
    backgroundColor: colors.orangeStrongHover,
    width: "100%",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 8,
  },
  confirmText: {
    color: colors.white,
    fontWeight: "600",
  },
  backButton: {
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderColor: colors.orangeStrongHover,
    borderWidth: 1,
    borderRadius: 4,
  },
  backText: {
    color: colors.orangeStrongHover,
    fontWeight: "600",
    fontSize: 12,
  },
});
