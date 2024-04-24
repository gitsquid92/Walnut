import react,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import firebase from 'firebase/app';
import {signInWithEmailAndPassword}from 'firebase/auth';
import { FIREBASE_AUTH } from '../../firebaseConfig';



const Login=()=> {
    const [username, setUsername] = useState('');
    const [password, setPassword] =useState(''); 
    const auth=FIREBASE_AUTH;
    const[loading,setLoading]=useState(false);
    const navigation = useNavigation();
    

    {/**Handle login using firebase */}
    const handleLogin = async () => {
      try {
        setLoading(true);
        const userCredential = await signInWithEmailAndPassword(auth, username, password);
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
   {/* const handleLogin = () => { //this was the original just onPress handler
     } navigation.navigate('AppTabNavigator',{screen:'Home'}); 
     
    } */}

    const handleSignup=()=>{
        navigation.navigate('Signup')
    };

  return (
    <View style={styles.container}>
        <Image source={require('../images/logoDoogle.png')}style={styles.image} />
        <Text style={styles.title}>Login</Text>

      <TextInput
            style={styles.input}
            placeholder="Username"
            autoCapitalize='none'
            value={username}
            onChangeText={setUsername}
            />

      <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            />
{/**Add sesction to confirm password entry here.. */}


      <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.signupText}>Don't have an account? Sign Up 
            </Text>
    
       </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

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
      margin: 15,
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
  export default Login;