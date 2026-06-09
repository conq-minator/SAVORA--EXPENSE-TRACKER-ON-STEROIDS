import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

const WEEKLY_DATA = [
  { day: 'Mon', amount: 1200, max: 3000 },
  { day: 'Tue', amount: 800, max: 3000 },
  { day: 'Wed', amount: 2400, max: 3000 },
  { day: 'Thu', amount: 1800, max: 3000 },
  { day: 'Fri', amount: 3000, max: 3000 },
  { day: 'Sat', amount: 2100, max: 3000 },
  { day: 'Sun', amount: 950, max: 3000 },
];

const CATEGORY_BREAKDOWN = [
  { name: 'Food & Drinks', amount: '₹4,500', percent: 35, color: '#ff6b6b', icon: 'coffee' },
  { name: 'Shopping', amount: '₹3,000', percent: 23, color: '#ffd93d', icon: 'shopping-bag' },
  { name: 'Transport', amount: '₹2,200', percent: 17, color: '#4ecdc4', icon: 'truck' },
  { name: 'Entertainment', amount: '₹1,800', percent: 14, color: '#e056a0', icon: 'play-circle' },
  { name: 'Bills & Utilities', amount: '₹1,420', percent: 11, color: '#6c63ff', icon: 'file-text' },
];

export default function Stats() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Statistics</Text>
          <View style={styles.periodSelector}>
            <View style={styles.periodActive}>
              <Text style={styles.periodActiveText}>Week</Text>
            </View>
            <Text style={styles.periodText}>Month</Text>
            <Text style={styles.periodText}>Year</Text>
          </View>
        </View>

        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <View>
              <Text style={styles.summaryLabel}>Total Spent</Text>
              <Text style={styles.summaryAmount}>₹12,920</Text>
            </View>
            <View style={styles.summaryChange}>
              <Feather name="trending-down" color="#4ecdc4" size={14} />
              <Text style={styles.summaryChangeText}>12% less</Text>
            </View>
          </View>
        </View>

        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>Weekly Spending</Text>
          <View style={styles.barChart}>
            {WEEKLY_DATA.map((item, i) => (
              <View key={i} style={styles.barCol}>
                <View style={styles.barTrack}>
                  <View
                    style={[
                      styles.barFill,
                      {
                        height: `${(item.amount / item.max) * 100}%`,
                        backgroundColor: i === 4 ? '#6c63ff' : '#252545',
                      },
                    ]}
                  />
                </View>
                <Text style={[styles.barLabel, i === 4 && { color: '#6c63ff' }]}>{item.day}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Spending by Category</Text>
        </View>

        {CATEGORY_BREAKDOWN.map((cat, i) => (
          <View key={i} style={styles.catRow}>
            <View style={[styles.catIcon, { backgroundColor: cat.color + '20' }]}>
              <Feather name={cat.icon as any} color={cat.color} size={18} />
            </View>
            <View style={styles.catInfo}>
              <View style={styles.catInfoTop}>
                <Text style={styles.catName}>{cat.name}</Text>
                <Text style={styles.catAmount}>{cat.amount}</Text>
              </View>
              <View style={styles.catProgressBar}>
                <View style={[styles.catProgressFill, { width: `${cat.percent}%`, backgroundColor: cat.color }]} />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f23',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 16,
  },
  periodSelector: {
    flexDirection: 'row',
    backgroundColor: '#1a1a2e',
    borderRadius: 12,
    padding: 4,
    alignItems: 'center',
  },
  periodActive: {
    backgroundColor: '#6c63ff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  periodActiveText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  periodText: {
    color: '#555577',
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  summaryCard: {
    marginHorizontal: 20,
    backgroundColor: '#1a1a2e',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#252545',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryLabel: {
    color: '#555577',
    fontSize: 13,
    fontWeight: '500',
  },
  summaryAmount: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 4,
    letterSpacing: -0.5,
  },
  summaryChange: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(78,205,196,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 4,
  },
  summaryChangeText: {
    color: '#4ecdc4',
    fontSize: 13,
    fontWeight: '600',
  },
  chartCard: {
    marginHorizontal: 20,
    backgroundColor: '#1a1a2e',
    borderRadius: 20,
    padding: 20,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: '#252545',
  },
  chartTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
  },
  barChart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 140,
  },
  barCol: {
    alignItems: 'center',
    flex: 1,
  },
  barTrack: {
    width: 24,
    height: 120,
    backgroundColor: '#0f0f23',
    borderRadius: 12,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  barFill: {
    width: '100%',
    borderRadius: 12,
  },
  barLabel: {
    color: '#555577',
    fontSize: 11,
    fontWeight: '500',
    marginTop: 8,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  catRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 16,
  },
  catIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  catInfo: {
    flex: 1,
  },
  catInfoTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  catName: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  catAmount: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  catProgressBar: {
    height: 6,
    backgroundColor: '#252545',
    borderRadius: 3,
    overflow: 'hidden',
  },
  catProgressFill: {
    height: '100%',
    borderRadius: 3,
  },
});
