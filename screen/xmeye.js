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

const Xmeye = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/img/xmeye/eye.png")}
          style={{
            height: "141px",
            width: "140px",
            marginTop: "33px",
            marginBottom: "80px",
          }}
        ></Image>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.input1}>
          <Image
            source={require("../assets/img/xmeye/Group 3.png")}
            style={{ height: "30px", width: "30px", marginBottom: "8px" }}
          ></Image>
          <TextInput
            placeholder="    Please input user name"
            style={styles.textPlaceHolder}
          ></TextInput>
        </View>

        <View style={styles.input1}>
          <Image
            source={require("../assets/img/xmeye/lock.png")}
            style={{ height: "30px", width: "30px", marginBottom: "8px" }}
          ></Image>
          <TextInput
            placeholder="    Please input user name"
            style={styles.textPlaceHolder}
          ></TextInput>
        </View>
      </View>

      <TouchableOpacity>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>LOGIN</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <View style={styles.text}>
          <TouchableOpacity>
            <Text style={styles.text1}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text1}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.text1}>Other Login Methods</Text>
      </View>

      <View style={styles.logo}>
        <TouchableOpacity>
          <Image
            style={styles.img}
            source={require("../assets/img/xmeye/Group 8.png")}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.img}
            source={require("../assets/img/xmeye/Group 9.png")}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={{
              backgroundColor: "rgba(58, 87, 156, 1)",
              width: '74px',
              height: '74px',
              marginBottom: '20px',
            }}
            source={require("../assets/img/xmeye/icons8-facebook-48.png")}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  imgContainer: {
    flex: 1,
    alignItems: "center",
  },

  inputContainer: {
    flex: 1,
  },

  input1: {
    width: "300px",
    borderBottomWidth: 1,
    flexDirection: "row",
    borderBottomColor: "rgba(196, 196, 196, 1)",
    left: "40px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  textPlaceHolder: {
    fontWeight: "400",
    lineHeight: "21.09px",
    fontFamily: "roboto",
    fontSize: "18px",
    color: "rgba(196, 196, 196, 1)",
  },

  btnContainer: {
    flex: 1,
  },

  btn: {
    height: "48px",
    width: "300px",
    borderRadius: "2px",
    backgroundColor: "rgba(56, 111, 252, 1)",
    justifyContent: "center",
    left: "40px",
  },
  btnText: {
    fontFamily: "roboto",
    fontWeight: "bold",
    lineHeight: "23.44px",
    textAlign: "center",
    fontSize: "20px",
    color: "rgba(255, 255, 255, 1)",
  },
  textContainer: {
    flex: 1,
  },

  text: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "-10px",
  },
  text1: {
    fontFamily: "roboto",
    fontWeight: "400",
    lineHeight: "21.09px",
    textAlign: "center",
    fontSize: "18px",
    marginTop: "50px",
  },

  logo: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },

  img: {
    width: '74px',
    height: '74px',
    marginBottom: '20px',
  },
});
export default Xmeye;
