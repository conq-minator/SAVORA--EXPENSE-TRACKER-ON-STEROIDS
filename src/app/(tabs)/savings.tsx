import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const OPPORTUNITIES = [
  {
    id: 1,
    title: 'Cheaper Ride Available',
    merchant: 'Uber → Rapido',
    description: 'Your Uber ride cost ₹210. Rapido was available at ₹160 for the same route.',
    saving: '₹50',
    icon: 'truck',
    color: '#4ecdc4',
  },
  {
    id: 2,
    title: 'Food Order Savings',
    merchant: 'Zomato → Swiggy',
    description: 'Same restaurant items available on Swiggy for ₹380 instead of ₹420.',
    saving: '₹40',
    icon: 'coffee',
    color: '#ff6b6b',
  },
  {
    id: 3,
    title: 'Unused Subscription',
    merchant: 'Netflix',
    description: 'You haven\'t used Netflix in 28 days. Consider pausing to save monthly.',
    saving: '₹649/mo',
    icon: 'play-circle',
    color: '#e056a0',
  },
  {
    id: 4,
    title: 'Budget Alert',
    merchant: 'Food Category',
    description: 'Food spending is at 85% of your monthly budget. You have ₹900 remaining.',
    saving: '₹900 left',
    icon: 'alert-triangle',
    color: '#ffd93d',
  },
];

const PREDICTIONS = [
  { label: 'Current Spending', value: '₹8,420', icon: 'activity', color: '#6c63ff' },
  { label: 'Predicted Month-End', value: '₹18,000', icon: 'trending-up', color: '#ff6b6b' },
  { label: 'Budget Limit', value: '₹15,000', icon: 'target', color: '#4ecdc4' },
];

export default function Savings() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>AI Insights</Text>
          <Text style={styles.headerSubtitle}>Smart recommendations to save money</Text>
        </View>

        <View style={styles.savingsHero}>
          <View style={styles.savingsHeroIcon}>
            <Feather name="zap" color="#ffd93d" size={28} />
          </View>
          <View>
            <Text style={styles.savingsHeroLabel}>Potential Monthly Savings</Text>
            <Text style={styles.savingsHeroAmount}>₹1,389</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Spending Forecast</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 20, paddingRight: 8 }}>
          {PREDICTIONS.map((pred, i) => (
            <View key={i} style={styles.predCard}>
              <View style={[styles.predIcon, { backgroundColor: pred.color + '20' }]}>
                <Feather name={pred.icon as any} color={pred.color} size={18} />
              </View>
              <Text style={styles.predLabel}>{pred.label}</Text>
              <Text style={styles.predValue}>{pred.value}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={[styles.warningBanner, { marginTop: 20 }]}>
          <Feather name="alert-circle" color="#ff6b6b" size={18} />
          <Text style={styles.warningText}>At current pace, you will exceed your budget by ₹3,000</Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommendations</Text>
        </View>

        {OPPORTUNITIES.map((opp) => (
          <View key={opp.id} style={styles.oppCard}>
            <View style={styles.oppHeader}>
              <View style={[styles.oppIcon, { backgroundColor: opp.color + '20' }]}>
                <Feather name={opp.icon as any} color={opp.color} size={18} />
              </View>
              <View style={styles.oppHeaderText}>
                <Text style={styles.oppTitle}>{opp.title}</Text>
                <Text style={styles.oppMerchant}>{opp.merchant}</Text>
              </View>
              <View style={styles.savingBadge}>
                <Text style={styles.savingBadgeText}>{opp.saving}</Text>
              </View>
            </View>
            <Text style={styles.oppDesc}>{opp.description}</Text>
            <View style={styles.oppActions}>
              <TouchableOpacity style={styles.oppDismiss}>
                <Text style={styles.oppDismissText}>Dismiss</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.oppAction}>
                <Text style={styles.oppActionText}>Take Action</Text>
              </TouchableOpacity>
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
  },
  headerSubtitle: {
    color: '#555577',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 6,
  },
  savingsHero: {
    marginHorizontal: 20,
    backgroundColor: '#1a1a2e',
    borderRadius: 20,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: '#252545',
  },
  savingsHeroIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: 'rgba(255,217,61,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  savingsHeroLabel: {
    color: '#888899',
    fontSize: 13,
    fontWeight: '500',
  },
  savingsHeroAmount: {
    color: '#4ecdc4',
    fontSize: 32,
    fontWeight: '800',
    marginTop: 2,
    letterSpacing: -0.5,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 14,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  predCard: {
    backgroundColor: '#1a1a2e',
    borderRadius: 18,
    padding: 16,
    width: 150,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#252545',
  },
  predIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  predLabel: {
    color: '#555577',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 4,
  },
  predValue: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
  },
  warningBanner: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'rgba(255,107,107,0.08)',
    borderRadius: 14,
    padding: 14,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: 'rgba(255,107,107,0.15)',
  },
  warningText: {
    color: '#ff6b6b',
    fontSize: 13,
    fontWeight: '600',
    flex: 1,
  },
  oppCard: {
    marginHorizontal: 20,
    backgroundColor: '#1a1a2e',
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#252545',
  },
  oppHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  oppIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  oppHeaderText: {
    flex: 1,
  },
  oppTitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  oppMerchant: {
    color: '#555577',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
  },
  savingBadge: {
    backgroundColor: 'rgba(78,205,196,0.12)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  savingBadgeText: {
    color: '#4ecdc4',
    fontSize: 13,
    fontWeight: '700',
  },
  oppDesc: {
    color: '#888899',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 14,
  },
  oppActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  oppDismiss: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#252545',
  },
  oppDismissText: {
    color: '#555577',
    fontSize: 13,
    fontWeight: '600',
  },
  oppAction: {
    backgroundColor: '#6c63ff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
  oppActionText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
  },
});
