import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../constants/Colors'

export const RoundedButton = ({
    style = {},
    textStyle = {},
    size = 125,
    ...props
}) => {
    return (
        <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
            <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = (size: number) => ({
    radius: {
        borderRadius: size / 2,
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: "center",
        borderColor: colors.light,
        borderWidth: 2
    },
    text: { color: colors.light, fontSize: size / 4 },
}); 