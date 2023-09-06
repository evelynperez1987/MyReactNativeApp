// rnfe y creo componentes hasta nro 14

import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const AddItem = ({userText, setUserText, addItem}) => {
  return (
    <View style={styles.buttonContainer}> 
      <View style={styles.inputContainer}>
        <TextInput placeholder="Escriba aquí..."
        style={styles.input}
        value= {userText}
        onChangeText = {(value) => setUserText (value)}
  />
      </View>

      <Pressable style= {styles.button} onPress={addItem}>
        <AntDesign name="pluscircle" size={24} color="blue" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 30,
    marginBottom: 30,
    borderWidth: 2,
    borderRadius: 10,
  },
  input: {
    padding: 10,
    fontSize: 20,
    width: 200,
  },
  button: {
    marginLeft: 15,
  },
})

export default AddItem