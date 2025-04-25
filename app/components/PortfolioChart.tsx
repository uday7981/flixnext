import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

type TimeframeOption = '1d' | '1w' | '1m' | '3m' | '6m' | '1y' | 'All';

type PortfolioChartProps = {
  isNegative?: boolean;
};

const PortfolioChart = ({ isNegative = false }: PortfolioChartProps) => {
  const [activeTimeframe, setActiveTimeframe] = useState<TimeframeOption>('1d');
  
  const timeframes: TimeframeOption[] = ['1d', '1w', '1m', '3m', '6m', '1y', 'All'];
  
  return (
    <View style={styles.container}>
      {/* Chart */}
      <View style={styles.chartContainer}>
        <Svg width="100%" height={200} viewBox="0 0 350 200" fill="none">
          <Path 
            d="M0 180L20 150L40 160L60 140L80 160L100 120L120 130L140 100L160 110L180 80L200 60L220 40L240 30L260 50L280 20L300 10L320 30L340 20L350 40" 
            stroke={isNegative ? "#EF4444" : "#EF4444"} 
            strokeWidth="3" 
            fill="none" 
          />
        </Svg>
      </View>
      
      {/* Timeframe selector */}
      <View style={styles.timeframeContainer}>
        {timeframes.map((timeframe) => (
          <TouchableOpacity 
            key={timeframe}
            style={[
              styles.timeframeButton,
              activeTimeframe === timeframe && styles.activeTimeframeButton
            ]}
            onPress={() => setActiveTimeframe(timeframe)}
          >
            <Text 
              style={[
                styles.timeframeText,
                activeTimeframe === timeframe && styles.activeTimeframeText
              ]}
            >
              {timeframe}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  chartContainer: {
    height: 200,
    marginBottom: 16,
  },
  timeframeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  timeframeButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  activeTimeframeButton: {
    backgroundColor: '#F1F5F9',
  },
  timeframeText: {
    fontSize: 14,
    color: '#94A3B8',
  },
  activeTimeframeText: {
    color: '#1E293B',
    fontWeight: '500',
  },
});

export default PortfolioChart;
