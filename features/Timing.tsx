import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { RoundedButton } from '../components/RoundedButton'

interface TimingProps {
    onChangeTime: (minutes: number) => void;
}

const Timing: React.FC<TimingProps> = ({ onChangeTime }) => {
    return (
        <>
            <View>
                <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
            </View>
            <View>
                <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
            </View>
            <View>
                <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />
            </View>
        </>

    )
}

export default Timing
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
})