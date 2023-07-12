import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { RoundedButton } from '../../components/RoundedButton';
import FocusTimeScreen, { AddSubjectFunction } from '../Screens/focusTimeScreen';



export default function focus() {
    const [currentSubject, setCurrentSubject] = useState('');
    return (

        <View style={styles.container}>
            {!currentSubject ? (<FocusTimeScreen addSubject={setCurrentSubject} />) : (<View><Text>not me</Text></View>)}

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    keyboard: {
        flex: 1,
    },
    textInput: {
        flex: 1,
        marginEnd: 10,

    },
    button: {
        justifyContent: 'center'
    },
    inputContainer: {

        padding: 20,
        flexDirection: "row",
        justifyContent: "flex-start",

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
