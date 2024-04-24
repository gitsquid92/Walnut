import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import ShiftsPosted from './ShiftsPosted';
import { useNavigation } from '@react-navigation/native';

const ShiftPosting = () => {
    const navigation = useNavigation();
    const [Position, setPosition] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [hourlyRate, setHourlyRate] = useState('');

    const submitPosition = () => {
        navigation.navigate('ShiftsPosted', { Position, startTime, endTime, jobDescription, hourlyRate });
    }

    return (
        <View style={styles.container}>
            <View style={styles.textboxContainer}>
                <Text style={styles.Text}>Please enter in the details of the shift! </Text>
                <TextInput
                    style={styles.textbox}
                    returnKeyType='done'
                    placeholder='Position'
                    value={Position}
                    onChangeText={(text) => setPosition(text)}
                />
                <TextInput
                    style={styles.textbox}
                    returnKeyType='done'
                    placeholder='Start Time'
                    value={startTime}
                    onChangeText={(text) => setStartTime(text)}
                />
                <TextInput
                    style={styles.textbox}
                    returnKeyType='done'
                    placeholder='End Time'
                    value={endTime}
                    onChangeText={(text) => setEndTime(text)}
                />
                
                <TextInput style={styles.textbox} 
                returnKeyType='done' 
                placeholder='Hourly Rate'
                value={hourlyRate}
                onChangeText={(text) => setHourlyRate(text)}
                 />
                <TextInput
                    style={styles.textbox2}
                    returnKeyType='done'
                    placeholder='Job Description'
                    editable
                    multiline
                    numberOfLines={5}
                    value={jobDescription}
                    onChangeText={(text) => setJobDescription(text)}
                />
            </View>
            <View style={styles.Buttons}>
                <Button title='Submit' onPress={submitPosition} />
                <Button title='Cancel' color='red' onPress={() => navigation.navigate('ShiftsPosted')} />
            </View>
        </View>
    );
};

export default ShiftPosting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bae7ea',
    },
    closeButton: {
        position: 'absolute',
        top: 50,
        right: 20,
    },
    textboxContainer: {
        marginTop: 50,
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        
        boardercolor: 'black',
    },
    textbox: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        
    },
    textbox2: {
        height: 100, width: 200, borderColor: 'gray', borderWidth: 1, margin: 12,
    },
    Buttons: {
        //borderWidth: 1,
        //padding: 10,
        margin: 75,
        height: 60,
        
    },
    closingButtons: {
        position: 'absolute',
        top: 50,
        right: 20,
    },
    Text: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        height: 40,
    },
    

});

