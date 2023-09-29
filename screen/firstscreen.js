// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const FirstScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          source={require("../assets/img/Ellipse8.png")}
          style={styles.img1}
        ></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text1}> GROW{"\n"} YOUR BUSINESS</Text>
      </View>

      <View style={styles.textContainer1}>
        <Text style={styles.text2}>
          We will help you to grow your business using {"\n"}online server
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Sign up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    height: "640px",
    width: "360px",
    backgroundImage: "linear-gradient(to bottom, #00CCF9,#00CCF9)",
  },

  img: {
    display: "flex",
    alignItems: "center",
    flex: 40,
  },
  img1: {
    width: 140,
    height: 140,
    marginTop: 105,
  },

  textContainer: {
    flex: 15,
  },

  textContainer1: {
    flex: 15,
    marginBottom: 50,
  },

  text1: {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 30,
  },

  text2: {
    fontSize: 15,
    marginTop: 50,
    textAlign: "center",
    lineHeight: 17.58,
    fontWeight: "bold",
  },

  btnContainer: {
    flex: 20,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  btnText: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 23.44,
  },

  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E3C000",
    width: "119px",
    height: "48px",
    borderRadius: 10,
    marginBottom: "150px",
  },
});
export default FirstScreen;
