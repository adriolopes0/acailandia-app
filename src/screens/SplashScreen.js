import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <Text style={styles.title}>AçaíLândia Club House</Text>
        <Text style={styles.subtitle}>SABOR QUE TRANSBORDA ENERGIA</Text>
      </View>

      <View style={styles.imageContainer}>
        <View style={styles.circle} />
        <Image
          source={{
            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk6mglyH23gqDH0U3u36zysjcI8gPrSrTn7DHEDYDh88GRLDzhm--XvgwWFuHuwbVl1HhudddZm7AtuhxADtStSRmG-yiVf-hlqjJoIRXygmc1hSXzuu2rrkAwmI-CeRFw-ntqTnADEcd7XT3Pl3bIamPQMLyHgyki6ufOL7fCsqcNt38UD3479cNnsZqR-iQcVqJS8p5a_I8XJijmSajU1wtoKtkkOgfkQko_r6yEiINO477RsR--IR3z0-6XXHeW2iIFUB17TQ",
          }}
          style={styles.image}
        />
        <View style={styles.badgeTop}>
          <Text style={styles.badgeText}>⭐ MAIS PEDIDO</Text>
        </View>
        <View style={styles.badgeBottom}>
          <Text style={styles.badgeTextDark}>🍇 100% ORGÂNICO</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Delivery')}
        >
          <Text style={styles.footerButtonText}>🚚 Delivery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('Stores')}
        >
          <Text style={styles.footerButtonText}>📍 Lojas</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5a1c6b",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  top: { alignItems: "center", marginTop: 60 },
  title: { color: "#fff", fontSize: 28, fontWeight: "bold" },
  subtitle: { color: "#d8a7e5", marginTop: 5, fontSize: 12 },
  imageContainer: { alignItems: "center", justifyContent: "center" },
  circle: {
    position: "absolute",
    width: 280,
    height: 280,
    borderRadius: 200,
    backgroundColor: "#7a2a8a",
  },
  image: { width: 230, height: 230, borderRadius: 200 },
  badgeTop: {
    position: "absolute",
    top: -10,
    right: -20,
    backgroundColor: "#8c46a5",
    padding: 10,
    borderRadius: 20,
  },
  badgeBottom: {
    position: "absolute",
    bottom: -15,
    left: -20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
  },
  badgeText: { color: "#fff", fontWeight: "bold", fontSize: 12 },
  badgeTextDark: { color: "#5a1c6b", fontWeight: "bold", fontSize: 12 },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 18,
    paddingHorizontal: 100,
    borderRadius: 40,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 18 },
  footer: { flexDirection: "row", gap: 30 },
  footerButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  footerButtonText: { color: "#ffffff", fontSize: 12, fontWeight: "600" },
});