import { StyleSheet, Text, View, Button, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.ctn}>
      <View style={styles.sytle1}>
        <Text>1</Text>
        <Button title={"Save"}></Button>
      </View>

      <View style={styles.sytle2}>
        <Text>1</Text>
        <Button title={"Save"}></Button>
        <Button title={"Save"}></Button>
        <Image
          source={{
            uri: "https://hinhgoc.net/upload/img/HG13.jpg?quality=100&width=1200&height=1200",
          }}
          style={{ width: "100px", height: "100px" }}
        ></Image>
      </View>

      <View style={styles.sytle3}>
        {/* <Text>1</Text>   */}
        <Button title={"Save"}></Button>
        <Button title={"Save"}></Button>
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  ctn: {
    flex: 1,
    backgroundColor: "red",
  },
  textstyle: {
    color: "white",
    fontSize: "50px",
  },

  sytle1: {
    flex: 1,
    backgroundColor: "yellow",
  },
  sytle2: {
    flex: 3,
    backgroundColor: "green",
    justifyContent: 'space-around',
    alignItems:'center'
  },
  sytle3: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
});
