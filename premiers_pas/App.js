import { StatusBar } from 'expo-status-bar';
import { ScrollView, Image, StyleSheet, Text, View, Alert, TouchableOpacity, ActivityIndicator} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [showLoading, setShowLoading] = useState(true);

  const Press = () => {
    Alert.alert("Alert message", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
    setShowLoading(false);
  };
  return showLoading ? (
    <ScrollView >
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.text1}>Text 1</Text>
          <StatusBar style='auto'/>
          <Text style={styles.text2}>Text 2</Text>
          <Text style={styles.text3}>Text 3</Text>
          <Image 
              source={require("./assets/favicon.png")} 
              style={{ width: 100, height: 100 }} />
          <Image
              source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
              style={{ width: 100, height: 100 }} />
           
            <TouchableOpacity style={styles.btn} onPress={Press}>
            <Text>Press Here</Text>
          </TouchableOpacity>
          <ActivityIndicator></ActivityIndicator>
        </View>
      </View>
    </ScrollView>
  ) : (
    <ScrollView >
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.text1}>Text 1</Text>
          <StatusBar style='auto'/>
          <Text style={styles.text2}>Text 2</Text>
          <Text style={styles.text3}>Text 3</Text>
          <Image 
              source={require("./assets/favicon.png")} 
              style={{ width: 100, height: 100 }} />
          <Image
              source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
              style={{ width: 100, height: 100 }} />

          <TouchableOpacity style={styles.btn} onPress={Press}>
          <Text>Press Here</Text>
          </TouchableOpacity>
          <ActivityIndicator></ActivityIndicator>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent:'center',
  },
  container1: {
    backgroundColor: 'white',
    margin: 60,

  },
  text1: {
    fontSize: 30,
    marginTop: 80,
    marginBottom:80,
  },
  text2: {
    textAlign: 'center',
    marginTop: 80,
    marginBottom:80,
  },
  text3: {
    fontWeight: 'bold',
    marginTop: 80,
    marginBottom:80,
  },
  btn: {
    backgroundColor: "#DDDDDD",
    padding: 10,

  }
});
