import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { initializeAuth, getReactNativePersistence, createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../firebaseConfig';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth=FIREBASE_AUTH;
const [loading, setLoading] = useState(false); 

const navigation = useNavigation(); 

const handleSignup = async () => {
  try {
    setLoading(true);
    const userCredential = await createUserWithEmailAndPassword(auth, username, password);
    const user = userCredential.user;
    if (user) {
      navigation.navigate('AppTabNavigator', { screen: 'Home' });
    }
  } catch (error) {
    console.log(error);
    alert('Invalid username or password');
  } finally {
    setLoading(false);
  }
};
  const handleSignIn = () => {
    navigation.navigate('AuthStack', { screen: 'Login' });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/logoDoogle.png')} style={styles.image} />
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Please enter your email"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Please enter a password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      {/**Add a section to confirm the password entry here */}

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign-up!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignIn}>
        <Text style={styles.signupText}>Already have an account? Sign-in here</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcfce7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },

  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#1e40af',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signupText: {
    color: '#1e40af',
    textDecorationLine: 'underline',
    paddingTop: 10,
  },
});

export default Signup;