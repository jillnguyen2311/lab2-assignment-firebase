import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Avatar } from '@ui-kitten/components';
import axios from 'axios';
import { signOutUser, getCurrentUser } from '../firebase/authService';
import Line from '../components/LineChart';

const DashboardScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [fruitName, setFruitName] = useState('');
  const [nutritionalFacts, setNutritionalFacts] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = getCurrentUser();

        const userEmail = user?.email || '';
        const extractedUsername = userEmail.split('@')[0];

        setUsername(extractedUsername);

        const response = await axios.get('https://www.fruityvice.com/api/fruit/apple');
        const fruitData = response.data;

        setFruitName(fruitData.name);
        setNutritionalFacts(fruitData.nutritions);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSignOut = async () => {
    try {
      navigation.navigate('Welcome to BCIT');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.centeredView}>
        <Text style={styles.bigText}>User logged in:</Text>
        <TouchableOpacity onPress={handleSignOut}>
          <Avatar source={require('../assets/user_avatar.jpg')} />
        </TouchableOpacity>
        <Text style={styles.whiteText}>Welcome {username}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.mediumText}>Average Starting Salary</Text>
        <View style={styles.chartContainer}>
          <Line />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.averageText}>{`Make sure to eat a(an) ${fruitName} a day`}</Text>
        <Text style={styles.whiteText}>Here is the nutritional Facts:</Text>
        <Text style={styles.whiteText}>{`Calories: ${nutritionalFacts.calories}`}</Text>
        <Text style={styles.whiteText}>{`Fat: ${nutritionalFacts.fat}`}</Text>
        <Text style={styles.whiteText}>{`Sugar: ${nutritionalFacts.sugar}`}</Text>
        <Text style={styles.whiteText}>{`Carbohydrates: ${nutritionalFacts.carbohydrates}`}</Text>
        <Text style={styles.whiteText}>{`Protein: ${nutritionalFacts.protein}`}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  whiteText: {
    color: 'white',
  },
  bigText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  mediumText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  averageText: {
    color: 'white',
    fontSize: 20,
  },
  section: {
    padding: 20,
  },
  chartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashboardScreen;
