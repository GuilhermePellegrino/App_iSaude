import { Image, Text, View } from "react-native";
import COLORS from "../../../constants/colors";
import Button from "../../Button";

export default function ConfirmedRegistration({ onConfirm }) {
  return (
    <View style={{ gap: 10 }}>
      <View style={{ gap: 40 }}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../../assets/cadastro-confirmado.png")}
            style={{ width: 280, height: 280 }}
          />
        </View>

        <Text style={{ fontSize: 18, fontWeight: 700 }}>
          Eba! seu cadastro foi confirmado.
        </Text>
      </View>

      <Text>
        Você acaba de entrar em uma rede social dedicada ao seu bem-estar.
      </Text>
      <Text>A partir de agora, você tem acesso a:</Text>
      <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT, fontWeight: 700 }}>
        - Cuidados personalizados com profissionais qualificados.
      </Text>
      <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT, fontWeight: 700 }}>
        - Ferramentas intuitivas para monitorar sua saúde.
      </Text>
      <Text style={{ fontSize: 12, color: COLORS.GRAY_TEXT, fontWeight: 700 }}>
        - Uma comunidade que incentiva sua evolução diária.
      </Text>
      <Button
        text="Começar a Navegar"
        additionalStyles={{ backgroundColor: "#01AEA4" }}
        onPress={onConfirm}
      />
    </View>
  );
}
