import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

export default function App() {
  return (
    // <View style={styles.container}>
    <ImageBackground
      style={styles.image}
      source={require("./assets/3060bf968d92368179ce26a756ce4271.jpg")}
    >
      {/* <View style={styles.container}> */}
      <TextInput style={styles.input} />
      {/* <View style={styles.innerBox}> */}
      {/* <Text style={styles.text}> */}
      {/* Open up App.js to start working on your app! */}
      {/* </Text> */}
      {/* </View> */}
      <StatusBar style="auto" />
      {/* </View> */}
    </ImageBackground>

    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // text: {
  //   color: "teal",
  //   fontSize: 50,
  //   textAlign: "center",
  // },
  // innerBox: {
  //   borderWidth: 3,
  //   borderColor: "red",
  //   padding: 40,
  //   borderRadius: 40,
  //   width: 350,
  // },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 40,
    borderRadius: 6,
    marginHorizontal: 20,
  },
});
