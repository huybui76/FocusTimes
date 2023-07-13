import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import FocusTimeScreen from '../Screens/focusTimeScreen';
import { Timer } from '../../features/Timer';
import FocusHistory from '../../features/focusHistory';

export default function Focus() {
    const [currentSubject, setCurrentSubject] = useState<string | undefined>();
    const [history, setHistory] = useState<string[]>([]);

    const onTimerEnd = (subject: string) => {
        setHistory((prevHistory) => [...prevHistory, subject]);
        setCurrentSubject(undefined);
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            {!currentSubject ? (
                <>
                    <FocusTimeScreen addSubject={setCurrentSubject} />
                    <FocusHistory history={history} />
                </>
            ) : (
                <Timer
                    focusSubject={currentSubject}
                    onTimerEnd={onTimerEnd}
                    clearSubject={() => setCurrentSubject(undefined)}
                />
            )}
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
