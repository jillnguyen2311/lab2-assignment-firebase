import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const ChartComponent = () => {
  const data = {
    labels: ['New Media', 'Digital Design', 'Computer Systems'],
    datasets: [
      {
        data: [40, 50, 60],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default is 3
    barPercentage: 0.5,
    formatYLabel: (value) => `$${value.toFixed(2)}k`,
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={350}
        height={220}
        yAxisLabel="$k"
        chartConfig={chartConfig}
        style={styles.chart}
        bezier
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default ChartComponent;
