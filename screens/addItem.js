import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import AboutSvg from './aboutSvg';
import { Dimensions } from 'react-native';
import { collection, addDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const AddItem = () => {
  const [contrat, setContrat] = useState('');
  const [intitule, setIntitule] = useState('');
  const [compteur, setCompteur] = useState('');
  const [adresse, setAdresse] = useState('');
  const [puce, setPuce] = useState('');
  const [pmd, setPmd] = useState('');
  const [type, setType] = useState('');
  const [tc, setTc] = useState('');
  const [tp, setTp] = useState('');

  const handleSubmit = async () => {
    if (!contrat) {
      Alert.alert('Validation Error', 'Le champ Contrat est obligatoire.');
      return;
    }

    try {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11, so add 1
      const day = String(today.getDate()).padStart(2, '0'); // getDate() returns the day of the month
      const formattedDate = `${day}/${month}/${year}`; // Adjust format to "DD/MM/YYYY"
 
      const docRef = await addDoc(collection(db, 'clientsdb'), {
        Adresse: adresse,
        CREATION: formattedDate,
        Num_contrat: contrat,
        Num_puce: puce,
        PMD: pmd,
        TC: tc,
        TP: tp,
        Type: type,
        intitule: intitule,
        user: "administrateur",
        Num_compteur: compteur,
      });
      console.log('Document added successfully!', docRef.id, docRef);
      // Assuming you have a navigation setup
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <AboutSvg customStyles={styles.curyStyles} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Ajouter un Nouveau Client</Text>
          <TextInput
            placeholder="Contrat"
            style={styles.input}
            value={contrat}
            onChangeText={setContrat}
          />
          <TextInput
            placeholder="Intitulé"
            style={styles.input}
            value={intitule}
            onChangeText={setIntitule}
          />
          <TextInput
            placeholder="Compteur"
            style={styles.input}
            value={compteur}
            onChangeText={setCompteur}
          />
          <TextInput
            placeholder="Adresse"
            style={styles.input}
            value={adresse}
            onChangeText={setAdresse}
          />
          <TextInput
            placeholder="Puce"
            style={styles.input}
            value={puce}
            onChangeText={setPuce}
          />
          <TextInput
            placeholder="PMD"
            style={styles.input}
            value={pmd}
            onChangeText={setPmd}
          />
          <TextInput
            placeholder="Type"
            style={styles.input}
            value={type}
            onChangeText={setType}
          />
          <TextInput
            placeholder="TC"
            style={styles.input}
            value={tc}
            onChangeText={setTc}
          />
          <TextInput
            placeholder="TP"
            style={styles.input}
            value={tp}
            onChangeText={setTp}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
    marginBottom: 40,
    color: "black",
  },
  input: {
    height: 38,
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
