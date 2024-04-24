import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';

import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import HomeScreen from './components/screens/authStack/HomeScreen';
import RestaurantProfile from './components/screens/authStack/RestaurantProfile';
import RestaurantReviewsPage from './components/screens/authStack/RestaurantReviewsPage';
import ShiftPosting from './components/screens/authStack/ShiftPosting';
import Settings from './components/screens/authStack/Settings';
import ShiftsPosted from './components/screens/authStack/ShiftsPosted';
import Example from './components/screens/authStack/Example'; 

const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();

const AuthStack=()=>{
  return(
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
      <Stack.Screen name='Signup' component={Signup}options={{headerShown:false}} />
      
    </Stack.Navigator>
  )
}

const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather name={'home'} size={25} color={focused ? 'orange' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={RestaurantProfile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather name={'user'} size={25} color={focused ? 'orange' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Reviews"
        component={RestaurantReviewsPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather name={'search'} size={25} color={focused ? 'orange' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Postings"
        component={ShiftPosting}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather name={'dollar-sign'} size={25} color={focused ? 'orange' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Posted"
        component={ShiftsPosted}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather name={'dollar-sign'} size={25} color={focused ? 'orange' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather name={'settings'} size={25} color={focused ? 'orange' : 'black'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthStack">
        <Stack.Screen name="AuthStack" component={AuthStack}options={{headerShown:false}} />
        <Stack.Screen name="AppTabNavigator" component={AppTabNavigator}options={{headerShown:false}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const ExampleStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Example" component={Example} />
      <Stack.Screen name="ShiftsPosted" component={ShiftsPosted} />
    </Stack.Navigator>
  );
};
const App=()=> {
  return (
    <GestureHandlerRootView style={{flex:1}}>
  
      <AppNavigator />
    
    </GestureHandlerRootView>
  );
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
