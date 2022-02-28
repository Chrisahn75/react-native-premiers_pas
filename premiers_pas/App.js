import { StatusBar } from 'expo-status-bar';
import { ScrollView,Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
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
    margin: '60px',

  },
  text1: {
    fontSize: '30px',
    marginTop: '80px',
    marginBottom:'80px',
  },
  text2: {
    textAlign: 'center',
    marginTop: '80px',
    marginBottom:'80px',
  },
  text3: {
    fontWeight: 'bold',
    marginTop: '80px',
    marginBottom:'80px',
  },
});
