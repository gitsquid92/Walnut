import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ShiftsPosted from './ShiftsPosted';

const Example = () => {
    const navigation = useNavigation();

    return (
        <View style={[styles.container]}>
            <View style={[styles.textContainer]}>
                <Text style={[styles.text]}>Position: Wait Staff</Text>
                <Text style={[styles.text]}>Start Time: 9:00 AM</Text>
                <Text style={[styles.text]}>End Time: 5:00 PM</Text>
                <Text style={[styles.text]}>Lunch: At 12 or 1 PM, depending on rush</Text>
                <Text style={[styles.text]}>Hourly Rate: 15$/hr</Text>
                <Text style={[styles.text]}>Job Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Nibh ipsum consequat nisl vel pretium lectus quam id. Id eu nisl nunc mi ipsum faucibus.</Text>
            </View>
            <View style={{ alignItems: 'center', margin: 150 }}>
            <Button title={'Go Back'} onPress={() => navigation.navigate(ShiftsPosted)}/>

            </View>
        </View>
    );
}

export default Example;

function closeButton() {
    const navigation = useNavigation();

    return (
        <Button
            title={'Go to ${ShiftsPosted}'}
            onPress={() => navigation.navigate(ShiftsPosted)} />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bae7ea',
        alignItems: 'top',
        justifyContent: 'top',
    },
    textContainer: {
        margin: 20,
        padding: 20,
        backgroundColor: 'lightgray',
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
