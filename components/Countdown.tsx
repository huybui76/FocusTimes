import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { fontSizes, spacing } from '../constants/size';
import colors from '../constants/Colors';

interface CountdownProps {
    minutes?: number;
    isPaused: boolean;
    onProgress: (progress: number) => void;
    onEnd: (reset: () => void) => void;
}

const Countdown: React.FC<CountdownProps> = ({
    minutes = 0.1,
    isPaused,
    onProgress,
    onEnd,
}) => {
    const interval = React.useRef<NodeJS.Timeout | null>(null);
    const [millis, setMillis] = useState<number | null>(null);

    const reset = () => setMillis(minutesToMillis(minutes));

    const countDown = () => {
        setMillis((time) => {
            if (time === null || time === 0) { // Check if time is null or 0
                clearInterval(interval.current as NodeJS.Timeout);
                onEnd(reset);
                return time;
            }
            const timeLeft = time! - 1000;
            return timeLeft;
        });
    };


    useEffect(() => {
        setMillis(minutesToMillis(minutes));
    }, [minutes]);

    useEffect(() => {
        onProgress(millis! / minutesToMillis(minutes));
    }, [millis, minutes, onProgress]);

    useEffect(() => {
        if (isPaused) {
            if (interval.current) clearInterval(interval.current);
            return;
        }
        interval.current = setInterval(countDown, 1000);

        return () => {
            if (interval.current) clearInterval(interval.current);
        };
    }, [isPaused]);

    const minute = Math.floor((millis! / 1000 / 60) % 60);
    const seconds = Math.floor((millis! / 1000) % 60);

    return (
        <Text style={styles.text}>
            {formatTime(minute)}:{formatTime(seconds)}
        </Text>
    );
};

const minutesToMillis = (min: number) => min * 1000 * 60;

const formatTime = (time: number) => (time < 10 ? `0${time}` : time.toString());

const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.xxxl,
        fontWeight: 'bold',


        padding: spacing.lg,
        backgroundColor: 'rgba(94, 132, 226, 0.3)',
    },
});

export default Countdown;