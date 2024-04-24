import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Settings() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('AuthStack', { screen: 'Login' });
  };
  return (
    <View style={styles.container}>

      <Text>.. 🚧</Text> 
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout
                </Text>
            </TouchableOpacity>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
