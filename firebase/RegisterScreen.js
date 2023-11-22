import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Card } from '@ui-kitten/components';
import { register } from './authService';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await register(email, password);
      navigation.navigate('Welcome to BCIT');
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subTitle}>Email:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email..."
          style={styles.input}
        />
        <Text style={styles.subTitle}>Password:</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Password..."
          style={styles.input}
        />
        <View style={styles.registerButton}>
          <Button title="REGISTER USER" onPress={handleRegister} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: '#303234',
  },
  card: {
    paddingTop: 5,
    borderRadius: 10,
    marginBottom: 20,
    borderTopWidth: 8,
    borderColor: '#3333cc',
  },
  input: {
    fontSize: 18,
    height: 30,
    marginBottom: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: '100%',
  },
  registerButton: {
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default RegisterScreen;
