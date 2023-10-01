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
  
  const Cau1e = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>REGISTER</Text>
        <TextInput style={styles.input1} placeholder="Name"></TextInput>
        <TextInput style={styles.input1} placeholder="Phone"></TextInput>
        <TextInput style={styles.input1} placeholder="Email"></TextInput>
        
        <TextInput style={styles.input1} placeholder="Password"></TextInput>
        <Image source={require('../assets/img/eye 1.png')} style={{width:'38px',height: '36px', marginLeft : '300px',marginTop: '-50px', }}></Image>
        <br></br>
        <TextInput style={styles.input1} placeholder="Birthday "></TextInput>
        
        <View style={styles.checkboxContainer}>
            <TouchableOpacity>
                <View style={styles.checkbox1}>
                    <View style={styles.textCheckBox}>Male</View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.checkbox1}>
                    <View style={styles.textCheckBox}>Female</View>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
        <TouchableOpacity>
            <View style={styles.btn}>
                <Text style={styles.btnText}>REGISTER</Text>
            </View>
        </TouchableOpacity>
        </View>
        <Text style={styles.text2}>When you agree to terms and conditions</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(49, 170, 82, 0.19)",
    },

    text1:{
        fontSize: '25px',
        lineHeight: '29.3px',
        fontFamily: 'roboto',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: '50px',
        marginBottom: '30px'
    },

    input1:{
        height: '54px',
        width: '330px',
        backgroundColor: "rgba(196, 196, 196, 0.3)",
        fontSize: '20px',
        marginLeft: '30px',
        marginBottom: '10px',
    },

    checkboxContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '10px',
        marginRight: '100px',
    },

    checkbox: {
        flexDirection: 'row',
    },
    checkbox1:{
      height: '23px',
      width: '23px',
      borderWidth: '2px',  
      flexDirection: 'row', 
      borderRadius: '25px',
     
    },

    textCheckBox:{
        fontFamily: 'roboto',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '21.09px',
        textAlign: 'center',
        marginLeft: '40px',
    },

    btnContainer:{
        flex: 1,
    },

    btn:{
        height: '45px',
        width: '330px',
        borderRadius: '2px',
        justifyContent: 'center',
        backgroundColor: 'rgba(229, 57, 53, 1)',
        marginLeft: '30px',
       
    },

    btnText:{
        fontSize: '20px',
        lineHeight: '23.44px',
        fontFamily: 'roboto',
        textAlign: 'center',
        fontWeight: 'bold',
       color: 'rgba(255, 255, 255, 1)',
        
    },

    text2:{
        fontSize: '14px',
        lineHeight: '16.41px',
        fontFamily: 'roboto',
        textAlign: 'center',
        fontWeight: '400',
     marginBottom: '70px',
    },
  });
  export default Cau1e;
  