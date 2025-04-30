import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";

import { Feather } from "@expo/vector-icons";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.imageContainer}>
        <Image source={require("../../../assets/logo-isaude-splash.png")} />
      </View>
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.title}>Que bom ter você de volta!</Text>
          <Text style={styles.subTitle}>
            Utilize suas Informações de Login para entrar na comunidade i-saúde!
          </Text>
        </View>

        <View style={styles.inputsWrapper}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>CPF ou CNPJ</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu CPF ou CNPJ aqui"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha aqui"
              secureTextEntry
            />
            <View style={styles.forgotPasswordWrapper}>
              <Text>Esqueci minha senha</Text>
            </View>
          </View>
        </View>
        <Button
          text="Continuar"
          icon={<Feather name="arrow-right" size={18} color="white" />}
        />
        <View style={styles.signUpWrapper}>
          <Text>
            Novo por aqui?{" "}
            <Text
              style={styles.decoratedText}
              onPress={() => navigation.navigate("Registro")}
            >
              crie uma conta!
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
