import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Card } from '@ui-kitten/components';
import { signIn } from './authService';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      navigation.navigate('Dashboard');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Sign In</Text>
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
        <View style={styles.signInButton}>
        <Button title="LOGIN" onPress={handleSignIn}/>
        </View>
        <View style={styles.bottom}>
        <Text onPress={() => navigation.navigate('Register')} style={styles.registerText}>
          Register
        </Text>
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
    backgroundColor: '#303234'
  },
  card: {
    paddingTop: 20,
    borderRadius: 10,
    marginBottom: 20,
    borderTopWidth: 8,
    borderColor: '#3333cc',
  },
  input: {
    height: 40,
    marginBottom: 10,
    paddingVertical: 5,
  },
  signInButton: {
    alignSelf: 'flex-start',
  },
  bottom: {
    marginTop: 20,
    borderTopWidth: 0.2,
    borderColor: 'gray',
  },
  registerText: {
    alignSelf: 'flex-end',
    margin: 30,
  },
  title: {
    fontSize: 30, 
    fontWeight: 'bold',
    marginBottom: 25,
  },
  subTitle: {
    fontSize: 20, 
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default SignInScreen;
