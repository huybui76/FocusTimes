import { Text, View, StyleSheet, Vibration } from 'react-native'
import React, { Component, useState } from 'react'
import Countdown from '../components/Countdown'
import { RoundedButton } from '../components/RoundedButton'
import { spacing } from '../constants/size'
import Colors from '../constants/Colors'
import { ProgressBar } from 'react-native-paper'
import Timing from './Timing'
import { useKeepAwake } from 'expo-keep-awake';

interface TimerProps {
    focusSubject: string;
    clearSubject: () => void;
    onTimerEnd: (subject: string) => void;
}


export const Timer: React.FC<TimerProps> = ({ focusSubject, clearSubject, onTimerEnd }) => {
    useKeepAwake();
    const [isStarted, setIsStarted] = useState(false)
    const [progress, setProgress] = useState(1)
    const [minute, setMinute] = useState(0.1)

    const ONE_SECOND_IN_MS = 1000;

    const PATTERN = [
        1 * ONE_SECOND_IN_MS,
        1 * ONE_SECOND_IN_MS,
        1 * ONE_SECOND_IN_MS,
        1 * ONE_SECOND_IN_MS,
        1 * ONE_SECOND_IN_MS,
    ];
    const onEnd = (reset: () => void) => {
        Vibration.vibrate(PATTERN)
        setIsStarted(false)
        setProgress(1)
        reset()
        onTimerEnd(focusSubject)

    }

    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown
                    minutes={minute}
                    isPaused={!isStarted}
                    onProgress={setProgress}
                    onEnd={onEnd} />
            </View>
            <View style={styles.settime}>

                <View style={styles.a1}>
                    <Text style={styles.title}>Focusing on:</Text>
                    <Text style={styles.task}>{focusSubject}</Text>
                </View>
                <View style={styles.progressBar}>
                    <ProgressBar
                        progress={progress}
                        color={Colors.Timer.color}
                        style={{ height: spacing.sm }}
                    />

                </View>
                <View style={styles.timing}>
                    <Timing onChangeTime={setMinute} />
                </View>
            </View>

            <View style={styles.buttonWrapper}>
                {!isStarted && (
                    <RoundedButton title='start' onPress={() => setIsStarted(true)} />
                )}
                {isStarted && (
                    <RoundedButton title='pause' onPress={() => setIsStarted(false)} />
                )}
            </View>
            <View style={styles.clearSubject}>
                <RoundedButton title='-' size={50} onPress={clearSubject} />
            </View>

        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    countdown: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    settime: {
        flex: 0.32
    },
    buttonWrapper: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 15,


    },
    a1: {
        paddingTop: spacing.xl
    },
    title: {
        color: Colors.light.text,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    task: {
        color: Colors.light.text,
        textAlign: 'center',
        paddingHorizontal: 20

    },
    progressBar: {
        paddingTop: spacing.xl
    },
    timing: {
        flex: 0.9,
        paddingTop: spacing.xl,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40
    },
    clearSubject: {

        alignItems: 'center',
        justifyContent: 'center',


    }



})