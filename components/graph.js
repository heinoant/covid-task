import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const Graph = props => {
  //Sets up the array
  const dailyCount = Array(31).fill(0);
  //Counts all instances and sums their count to corresponding index
  for (let i = 0; i < props.confirmed.length - 1; i++) {
    let cur = new Date(props.confirmed[i].date);
    if (cur.getMonth() == '2') {
      dailyCount[cur.getDate() - 1]++;
    }
  }
  //Formatting data to suit chart library
  const data = {
    labels: ['1.3.', '5.3.', '10.3.', '15.3.', '20.3.', '25.3.'],
    datasets: [
      {
        data: dailyCount
      }
    ]
  };

  return (
    <View>
      <Text style={styles.text}>Maaliskuun tartunnat</Text>
      <BarChart
        data={data}
        width={Dimensions.get('window').width - 30}
        height={300}
        chartConfig={{
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          strokeWidth: 2,
          barPercentage: 0.36
        }}
      />
      <Text style={styles.textSmall}>
        Uusia vahvistettuja tapauksia per päivä
      </Text>
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: 'dimgray',
    alignSelf: 'center',
    padding: 20
  },
  textSmall: {
    fontSize: 15,
    color: 'dimgray',
    alignSelf: 'center',
    marginTop: -30
  }
});
