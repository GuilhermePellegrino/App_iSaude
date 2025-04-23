import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../../../assets/logo-isaude.png")} />
          <Image source={require("../../../assets/imagem-inicial.png")} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>A sua nova Rede Social favorita!</Text>
          <Text style={styles.description}>
            Conecte-se a uma comunidade que valoriza sua saúde e bem-estar.
            Aqui, você encontra apoio de profissionais com vídeo-consultas,
            compartilha conquistas e gerencia sua rotina de forma integrada e
            acolhedora. Crie sua conta. Leva menos de 2 minutos!
          </Text>

          <Button text="Criar uma conta" />

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.secondaryButtonText}>Fazer login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
