import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../constants/Colors';

export const SquareButton = ({
    style = {},
    textStyle = {},
    size = 125,
    ...props
}) => {
    return (
        <TouchableOpacity style={[styles(size).button, style]} onPress={props.onPress}>
            <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = (size: number) =>
    StyleSheet.create({
        button: {
            borderRadius: 7,
            width: size,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.light.text,
        },
        text: {
            color: colors.dark.text,
            fontSize: 16,
            fontWeight: 'bold',
        },
    });
