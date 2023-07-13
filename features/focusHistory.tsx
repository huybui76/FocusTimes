import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import { fontSizes, spacing } from '../constants/size';

interface FocusHistoryProps {
    history: string[];
}

const renderItem = ({ item }: { item: string }) => (
    <Text style={styles.item}>
        {'\u2713'} {item}
    </Text>
);


const FocusHistory: React.FC<FocusHistoryProps> = ({ history }) => {
    const reversedHistory = history.slice().reverse();
    return (
        <View style={styles.container}>
            {!history || !history.length ? (
                <Text style={styles.title}>We haven't focused on anything yet!</Text>
            ) : (
                <>
                    <Text style={styles.title}>Things We've Focused On:</Text>
                    <FlatList
                        data={reversedHistory}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </>
            )}
        </View>
    );
};

export default FocusHistory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: fontSizes.md,
        padding: spacing.md,
        alignItems: 'flex-start',
    },
    item: {
        fontSize: fontSizes.md,
        padding: 7,
        alignItems: 'flex-start',
    },
    title: {
        color: Colors.light.tint,
        fontSize: fontSizes.md,
        fontWeight: 'bold',
    },
});
