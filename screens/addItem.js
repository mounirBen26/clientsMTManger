import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

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
      <Text>AddItem</Text>
      <TextInput
        style={styles.input}
        placeholder="Contrat"
        value={contract}
        onChangeText={setContract}
      />
      <TextInput
        style={styles.input}
        placeholder="Intitulé"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="N° compteur"
        value={counterNo}
        onChangeText={setCounterNo}
      />
      <TextInput
        style={styles.input}
        placeholder="N° puce"
        value={chipNo}
        onChangeText={setChipNo}
      />
      <TextInput
        style={styles.input}
        placeholder="Adresse"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="PMD"
        value={pmd}
        onChangeText={setPmd}
      />
      <TextInput
        style={styles.input}
        placeholder="Type"
        value={type}
        onChangeText={setType}
      />
      <TextInput
        style={styles.input}
        placeholder="TC"
        value={tc}
        onChangeText={setTc}
      />
      <TextInput
        style={styles.input}
        placeholder="TP"
        value={tp}
        onChangeText={setTp}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
});

export default AddItem;