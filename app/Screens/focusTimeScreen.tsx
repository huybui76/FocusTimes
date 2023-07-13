import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { RoundedButton } from '../../components/RoundedButton';

type AddSubjectFunction = (subject: string) => void; // Define the type for addSubject

type FocusTimeScreenProps = {
  addSubject: AddSubjectFunction;
};

export default function FocusTimeScreen({ addSubject }: FocusTimeScreenProps) {
  console.log("======================onFocusScreen==========================");
  const [subject, setSubject] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboard}
    >
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            label="Focus on ?"
            mode="outlined"
            value={subject}
            onChangeText={setSubject} // Use setSubject directly as the onChangeText callback
          />
          <View style={styles.button}>
            <RoundedButton title="+" size={50} onPress={() => addSubject(subject)} />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  keyboard: {
    //flex: 1,
  },
  textInput: {
    flex: 1,
    marginEnd: 10,
  },
  button: {
    justifyContent: 'center',
  },
  inputContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
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

export type { AddSubjectFunction }; // Export the AddSubjectFunction type for use in other files
