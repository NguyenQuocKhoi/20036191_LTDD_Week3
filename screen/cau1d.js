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

const Cau1d = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: "50px" }}>
        <Text style={styles.text1}>LOGIN</Text>
      </View>
      <View style={styles.inpuContainer}>
        <View style={styles.input1}>
          <Text style={styles.text2}>Email</Text>
        </View>

        <View style={styles.input2}>
          <Text style={styles.text2}>Password</Text>
          <Image
            source={require("../assets/img/eye 1.png")}
            style={styles.img}
          ></Image>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.text3}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text>When you agree to term and conditions</Text>
        <TouchableOpacity>
          <Text style={{ color: "blue" }}>Forgot your password</Text>
        </TouchableOpacity>
        <Text>Or login with</Text>
      </View>

      <View style={styles.logo}>
        <TouchableOpacity>
          <Image
            style={{
              width: "35px",
              height: "35px",
              marginTop: "10px",
              backgroundColor: "rgba(6, 128, 241, 1)",
            }}
            source={require("../assets/img/icofacebook-1924510 1.png")}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.img1}
            source={require("../assets/img/icons8-zalo-48.png")}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.img1}
            source={require("../assets/img/Group.png")}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: "rgba(49, 170, 82, 0.19)",
  },
  inpuContainer: {
    flex: 30,
    marginTop: "70px",
  },

  input1: {
    height: "54px",
    width: "330px",
    // borderWidth: '1px',
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    alignSelf: "center",
    justifyContent: "center",
  },

  input2: {
    height: "54px",
    width: "330px",
    // borderWidth: '1px',
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: "60px",
  },
  text1: {
    fontFamily: "roboto",
    flex: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "25px",
    lineHeight: "29.3px",
    fontWeight: "700",
    // opacity: '100%'
  },

  text2: {
    fontFamily: "roboto",
    alignItems: "center",
    fontSize: "18px",
    lineHeight: "21.09px",
    fontWeight: "400",
    marginLeft: "20px",
    flexDirection: "row",
  },
  img: {
    height: "36px",
    width: "38px",
    display: "flex",
    marginLeft: "270px",
    alignItems: "center",
    marginTop: "-20px",
  },

  btnContainer: {
    flex: 10,
  },

  btn: {
    height: "54px",
    width: "330px",
    backgroundColor: "rgba(229, 57, 53, 1)",
    alignSelf: "center",
    marginTop: "90px",
    justifyContent: "center",
  },

  text3: {
    fontFamily: "roboto",
    display: "flex",
    textAlign: "center",
    fontSize: "20px",
    lineHeight: "23.44px",
    fontWeight: "700",
    justifyContent: "center",
    color: "rgba(255, 255, 255, 1)",
  },

  textContainer: {
    flex: 20,
    // display: "flex",
    // justifyContent: "space-around",
    alignItems: "center",
    marginTop: "100px",
  },
  logo: {
    flex: 20,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "-70px",
    flexDirection: "row",
  },

  img1: {
    width: "35px",
    height: "35px",
    marginTop: "10px",
  },
});
export default Cau1d;
