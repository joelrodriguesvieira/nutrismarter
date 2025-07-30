import LogoNutriSmarter from "@/components/Logo";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";
import { useUser } from "../contexts/useContext";
import { styles } from "./register.style";

export default function Register() {
  const {
    userName,
    userEmail,
    userPassword,
    setUserName,
    setUserEmail,
    setUserPassword,
  } = useUser();
  const navigation = useNavigation();
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = () => {
    // deixar sem nenhuma validacao por enquanto
    // setError("");
    // if (!userEmail || !userName || !userPassword) {
    //   setError("Preencha todos os campos");
    //   return;
    // }

    // if (confirmPassword !== userPassword) {
    //   setError("Digite a mesma senha em ambos os campos");
    //   return;
    // }

    // adicionar logica para a pagina 3
  };

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
          placeholderTextColor={colors.grayPlaceholder}
          onChangeText={setUserEmail}
          value={userEmail}
        />
        <TextInput
          placeholder="Nome de Usuário"
          style={styles.input}
          placeholderTextColor={colors.grayPlaceholder}
          onChangeText={setUserName}
          value={userName}
        />
        <TextInput
          placeholder="Crie uma senha"
          style={styles.input}
          secureTextEntry
          placeholderTextColor={colors.grayPlaceholder}
          onChangeText={setUserPassword}
          value={userPassword}
        />
        <TextInput
          placeholder="Confirme a senha"
          style={styles.input}
          secureTextEntry
          placeholderTextColor={colors.grayPlaceholder}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />

        <TouchableOpacity style={styles.confirmButton} onPress={handleSubmit}>
          <Text style={styles.confirmText}>Confirmar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>VOLTAR</Text>
        </TouchableOpacity>

        {error !== "" && <Text style={styles.textError}>{error}</Text>}
      </View>
    </View>
  );
}
