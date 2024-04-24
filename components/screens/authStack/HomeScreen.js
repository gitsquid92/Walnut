import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, SectionList } from 'react-native';
import { Calendar } from 'react-native-calendars';

// Import the image for the top of the screen
import logoImage from '../../images/logoDoogle.png';

const shiftOpenings = [
  { id: 1, title: 'Shift 1', location: 'Location 1', time: '12:00 PM - 4:00 PM' },
  { id: 2, title: 'Shift 2', location: 'Location 2', time: '3:00 PM - 7:00 PM' },
  // Add more shift openings here would like to have them being pulled dynamically from a database
];

const personalizedRecommendations = [
  {
    title: 'Recommendation 1',
    data: ['Item 1', 'Item 2', 'Item 3'],
  },
  {
    title: 'Recommendation 2',
    data: ['Item 4', 'Item 5', 'Item 6'],
  },
  // Add more personalized recommendations here
];

const notifications = [
  { id: 1, title: 'Notification 1', message: 'Message 1' },
  { id: 2, title: 'Notification 2', message: 'Message 2' },
  // Add more notifications here
];

// Dashboard component
const Dashboard = ({ shiftOpenings, personalizedRecommendations, notifications }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Display the image at the top */}
        <Image source={logoImage} style={styles.image} />
        {/* Welcome message */}
        <Text style={styles.title}>Welcome back!</Text>
        {/* Calendar component */}
        <View style={styles.calendarContainer}>
          <Calendar />
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 5
    ,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  calendarContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
});