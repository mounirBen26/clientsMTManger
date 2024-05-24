import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import AboutSvg from './aboutSvg';
import { Dimensions } from 'react-native';

const AddItem = () => {
  const [contract, setContract] = useState('');
  const [title, setTitle] = useState('');
  const [counterNo, setCounterNo] = useState('');
  const [chipNo, setChipNo] = useState('');
  const [address, setAddress] = useState('');
  const [pmd, setPmd] = useState('');
  const [type, setType] = useState('');
  const [tc, setTc] = useState('');
  const [tp, setTp] = useState('');

  return (
    <View style={styles.container}>
      <AboutSvg customStyles={styles.curyStyles} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Ajouter un nouvel Client</Text>
          <TextInput style={styles.input} placeholder="Contrat" value={contract} onChangeText={setContract} />
          <TextInput style={styles.input} placeholder="Intitulé" value={title} onChangeText={setTitle} />
          <TextInput style={styles.input} placeholder="N° compteur" value={counterNo} onChangeText={setCounterNo} />
          <TextInput style={styles.input} placeholder="N° puce" value={chipNo} onChangeText={setChipNo} />
          <TextInput style={styles.input} placeholder="Adresse" value={address} onChangeText={setAddress} />
          <TextInput style={styles.input} placeholder="PMD" value={pmd} onChangeText={setPmd} />
          <TextInput style={styles.input} placeholder="Type" value={type} onChangeText={setType} />
          <TextInput style={styles.input} placeholder="TC" value={tc} onChangeText={setTc} />
          <TextInput style={styles.input} placeholder="TP" value={tp} onChangeText={setTp} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ajouter</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e4F4',
  },
  title: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb_400Regular',
    textAlign: 'center',
    marginBottom: 30,
    color: "black",
  },
  input: {
    height: 37,
    width: '80%',
    elevation: 1,
    marginVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
    fontFamily: 'TitilliumWeb_400Regular',
  },
  button: {
    backgroundColor: '#50C878',
    padding: 10,
    borderRadius: 16,
    width: '80%',
    marginTop: 8,
    elevation: 1,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'TitilliumWeb_400Regular',
  },
  curyStyles: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddItem;