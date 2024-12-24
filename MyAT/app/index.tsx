import React, { useState} from 'react';
import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity } from 'react-native';

const app = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Augusta Transportation</Text>

        <Text style={styles.subheading}>Sign-In</Text>

        <Text style={styles.subtext}>Email:</Text>
        <TextInput style={styles.input} placeholder='Email'></TextInput>

        <Text style={styles.subtext}>Password:</Text>  
        <TextInput style={styles.input} placeholder='Password'></TextInput>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </View>
      
     
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24, 
    marginTop: 150,
  },

  subheading: {
    textAlign: 'center',
    fontSize: 24,
  },

  subtext: {
    fontSize: 24,
    marginVertical: 20, 
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 50,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
}
)

export default app;