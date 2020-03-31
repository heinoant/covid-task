import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import Graph from './graph';

const Datafetch = props => {
  //Sets initial states for different cases
  const [confirmed, setConfirmed] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    //Fetches data with Axios
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const { data } = await axios(
          'https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData'
        );
        //Destructures data, sets empty object if data is missing
        const { confirmed, deaths, recovered } = data || {};

        setConfirmed(confirmed);
        setDeaths(deaths);
        setRecovered(recovered);
        //Error handling
      } catch (error) {
        setIsError(true);
      }
      //Updates Loading state
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (props.showGraph == false) {
    return (
      <View>
        {isError && <Text>Datanhaussa tapahtui virhe</Text>}
        {isLoading ? (
          <Text style={styles.text}>Lataa dataa...</Text>
        ) : (
          <View>
            <Text style={styles.text}>Sairastunut: {confirmed.length}</Text>
            <Text style={styles.text}>Kuollut: {deaths.length}</Text>
            <Text style={styles.text}>Parantunut: {recovered.length}</Text>
          </View>
        )}
      </View>
    );
  } else {
    return (
      <View>
        {isError && <Text>Datanhaussa tapahtui virhe</Text>}
        {isLoading ? (
          <Text style={styles.text}>Lataa dataa...</Text>
        ) : (
          <Graph confirmed={confirmed} />
        )}
      </View>
    );
  }
};

export default Datafetch;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: 'dimgray'
  }
});
