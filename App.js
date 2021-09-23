import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import axios from 'axios';

export default function App() {
  const [fact, useFact] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axios.get('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1') ;
      useFact(response.data[0].fact);
    }

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{fact}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
});
