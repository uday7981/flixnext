import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const StockDetails = () => {
    const { id } = useLocalSearchParams<{ id: string }>()
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.stockSymbol}>{id}</Text>
                    <Text style={styles.stockName}>Stock Name</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>$0.00</Text>
                    <Text style={styles.priceChange}>+0.00 (0.00%)</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Shariah Compliance</Text>
                    <Text style={styles.complianceStatus}>✅ Compliant</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About</Text>
                    <Text style={styles.description}>
                        This is a placeholder for the stock description. Information about the company, its operations, and Shariah compliance details will be displayed here.
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Key Metrics</Text>
                    <View style={styles.metricsGrid}>
                        <View style={styles.metricItem}>
                            <Text style={styles.metricLabel}>Market Cap</Text>
                            <Text style={styles.metricValue}>$0.00B</Text>
                        </View>
                        <View style={styles.metricItem}>
                            <Text style={styles.metricLabel}>P/E Ratio</Text>
                            <Text style={styles.metricValue}>0.00</Text>
                        </View>
                        <View style={styles.metricItem}>
                            <Text style={styles.metricLabel}>Dividend</Text>
                            <Text style={styles.metricValue}>0.00%</Text>
                        </View>
                        <View style={styles.metricItem}>
                            <Text style={styles.metricLabel}>52W High</Text>
                            <Text style={styles.metricValue}>$0.00</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
    },
    stockSymbol: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E293B',
    },
    stockName: {
        fontSize: 16,
        color: '#64748B',
        marginTop: 4,
    },
    priceContainer: {
        padding: 16,
        backgroundColor: '#F8FAFC',
    },
    price: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1E293B',
    },
    priceChange: {
        fontSize: 16,
        color: '#10B981',
        marginTop: 4,
    },
    section: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F5F9',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1E293B',
        marginBottom: 8,
    },
    complianceStatus: {
        fontSize: 16,
        color: '#10B981',
    },
    description: {
        fontSize: 14,
        color: '#64748B',
        lineHeight: 20,
    },
    metricsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    metricItem: {
        width: '50%',
        padding: 8,
    },
    metricLabel: {
        fontSize: 14,
        color: '#64748B',
    },
    metricValue: {
        fontSize: 16,
        fontWeight: '500',
        color: '#1E293B',
        marginTop: 4,
    },
});

export default StockDetails
