import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, ScrollView,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AboutSvg from './aboutSvg'
import { Dimensions } from 'react-native';

const UpdateItem = ({ navigation, route }) => {
  const { item } = route.params;
  const [contrat, setContrat] = useState(item.Num_contrat);
  const [intitule, setIntitule] = useState(item.intitule);
  const [compteur, setCompteur] = useState(item.Num_compteur);
  const [adresse, setAdresse] = useState(item.Adresse);
  const [puce, setPuce] = useState(item.Num_puce);
  const [pmd, setPmd] = useState(item.PMD);
  const [type, setType] = useState(item.Type);
  const [tc, setTc] = useState(item.TC);
  const [tp, setTp] = useState(item.TP);
  function handleSubmit(){
    console.log(puce, pmd, compteur);
  }
  

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={100} 
      >
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          keyboardShouldPersistTaps='handled'
        >
          <AboutSvg customStyles={styles.curyStyles} />
          <Text style={{ textAlign: 'center', marginVertical: 10 }}>Editer Client: {item.intitule}</Text>
          <View style={styles.formContainer}></View>
          <TextInput
            style={styles.input}
            placeholder="Contrat"
            value={contrat}
            onChangeText={setContrat}
          />
          <TextInput
            style={styles.input}
            placeholder="Intitulé"
            value={intitule}
            onChangeText={setIntitule}
          />
          <TextInput
            placeholder="Compteur"
            style={styles.input}
            value={compteur.toString()}
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
            value={puce.toString()}
            onChangeText={setPuce}
          />
          <TextInput
            placeholder="PMD"
            style={styles.input}
            value={pmd.toString()}
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
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

export default UpdateItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e4F4',
   justifyContent: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  input: {
    height: 38,
    width: 300,
    elevation: 1,
    marginVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
    fontFamily: 'TitilliumWeb_400Regular',
  },
  curyStyles: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  button: {
    backgroundColor: '#50C878',
    padding: 10,
    borderRadius: 16,
    width: 300,
    marginTop: 8,
    elevation: 1,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'TitilliumWeb_400Regular',
  },
});
