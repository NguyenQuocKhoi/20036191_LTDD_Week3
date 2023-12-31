// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Cau2a = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <View style={styles.input1}>
          <Image
            style={{
              height: "32px",
              width: "32px",
              justifyContent: "center",
              marginTop: "10px",
            }}
            source={require("../assets/img/avatar_user 1.png")}
          ></Image>
          <TextInput placeholder="Name"></TextInput>
        </View>

        <View style={styles.input1}>
          <Image
            style={{
              height: "32px",
              width: "32px",
              justifyContent: "center",
              marginTop: "10px",
            }}
            source={require("../assets/img/lock-152879.png")}
          ></Image>

          <TextInput placeholder="Password"></TextInput>
        </View>
        {/* <Image source={require('../assets/img/eye 1.png')}  styles={{height:'32px', width: '32px', marginLeft: '100px'}}></Image> */}
      </View>
      <TouchableOpacity>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>LOGIN</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.text2}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage:
      "linear-gradient(to bottom, rgba(251, 203, 0, 1),rgba(191, 154, 0, 1))",
  },
  text1: {
    fontFamily: "roboto",
    fontSize: "30px",
    lineHeight: "35.16px",
    fontWeight: "bold",
    marginTop: "60px",
    marginLeft: "30px",
    marginBottom: "100px",
  },

  inputContainer: {
    flex: 1,
  },

  input1: {
    height: "54px",
    width: "330px",
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    borderWidth: "1px",
    borderColor: "rgba(242, 242, 242, 1)",
    flexDirection: "row",
    left: "30px",
    marginBottom: "50px",
    // justifyContent: 'space-around',
  },

  btnContainer: {
    flex: 1,
  },

  btn: {
    height: "45px",
    width: "330px",
    borderRadius: "2px",
    backgroundColor: "rgba(6, 0, 0, 1)",
    justifyContent: "center",
    left: "30px",
  },
  btnText: {
    fontFamily: "roboto",
    fontWeight: "bold",
    lineHeight: "23.44px",
    textAlign: "center",
    fontSize: "20px",
    color: "rgba(255, 255, 255, 1)",
  },

  text2: {
    fontFamily: "roboto",
    fontSize: "20px",
    lineHeight: "23.44px",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 1)",
    textAlign: 'center',
    marginBottom: '100px',
    marginTop: '50px'
  },
});
export default Cau2a;
