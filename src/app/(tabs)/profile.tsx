import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function Profile() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>S</Text>
          </View>
          <Text style={styles.name}>Soumik</Text>
          <Text style={styles.email}>soumik@email.com</Text>
        </View>

        <View style={styles.scoreCard}>
          <View style={styles.scoreLeft}>
            <Text style={styles.scoreLabel}>Financial Health</Text>
            <Text style={styles.scoreValue}>82<Text style={styles.scoreMax}>/100</Text></Text>
          </View>
          <View style={styles.scoreRight}>
            <View style={styles.scoreBadge}>
              <Feather name="award" color="#4ecdc4" size={16} />
              <Text style={styles.scoreBadgeText}>Good</Text>
            </View>
          </View>
        </View>

        <View style={styles.scoreBreakdown}>
          {[
            { label: 'Savings Ratio', value: 85, color: '#4ecdc4' },
            { label: 'Budget Adherence', value: 72, color: '#6c63ff' },
            { label: 'Expense Growth', value: 90, color: '#ffd93d' },
            { label: 'Subscription Usage', value: 65, color: '#e056a0' },
          ].map((item, i) => (
            <View key={i} style={styles.scoreRow}>
              <Text style={styles.scoreRowLabel}>{item.label}</Text>
              <View style={styles.scoreBar}>
                <View style={[styles.scoreBarFill, { width: `${item.value}%`, backgroundColor: item.color }]} />
              </View>
              <Text style={[styles.scoreRowValue, { color: item.color }]}>{item.value}%</Text>
            </View>
          ))}
        </View>

        <View style={styles.menuSection}>
          {[
            { icon: 'settings', label: 'Settings', desc: 'App preferences' },
            { icon: 'shield', label: 'Privacy', desc: 'Data & permissions' },
            { icon: 'download', label: 'Export Data', desc: 'CSV, PDF reports' },
            { icon: 'help-circle', label: 'Help & Support', desc: 'FAQs, contact us' },
          ].map((item, i) => (
            <TouchableOpacity key={i} style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Feather name={item.icon as any} color="#6c63ff" size={18} />
              </View>
              <View style={styles.menuInfo}>
                <Text style={styles.menuLabel}>{item.label}</Text>
                <Text style={styles.menuDesc}>{item.desc}</Text>
              </View>
              <Feather name="chevron-right" color="#555577" size={18} />
            </TouchableOpacity>
          ))}
        </View>
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
    paddingBottom: 10,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800',
  },
  avatarSection: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6c63ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '700',
  },
  name: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '700',
  },
  email: {
    color: '#555577',
    fontSize: 14,
    marginTop: 4,
  },
  scoreCard: {
    marginHorizontal: 20,
    backgroundColor: '#1a1a2e',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#252545',
  },
  scoreLeft: {},
  scoreLabel: {
    color: '#555577',
    fontSize: 13,
    fontWeight: '500',
  },
  scoreValue: {
    color: '#4ecdc4',
    fontSize: 36,
    fontWeight: '800',
    marginTop: 4,
  },
  scoreMax: {
    color: '#555577',
    fontSize: 18,
    fontWeight: '500',
  },
  scoreRight: {},
  scoreBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(78,205,196,0.1)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
  },
  scoreBadgeText: {
    color: '#4ecdc4',
    fontSize: 14,
    fontWeight: '600',
  },
  scoreBreakdown: {
    marginHorizontal: 20,
    backgroundColor: '#1a1a2e',
    borderRadius: 20,
    padding: 20,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: '#252545',
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  scoreRowLabel: {
    color: '#888899',
    fontSize: 13,
    fontWeight: '500',
    width: 120,
  },
  scoreBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#252545',
    borderRadius: 3,
    overflow: 'hidden',
    marginHorizontal: 12,
  },
  scoreBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  scoreRowValue: {
    fontSize: 13,
    fontWeight: '700',
    width: 40,
    textAlign: 'right',
  },
  menuSection: {
    marginHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#252545',
  },
  menuIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: 'rgba(108,99,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  menuInfo: {
    flex: 1,
  },
  menuLabel: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  menuDesc: {
    color: '#555577',
    fontSize: 12,
    marginTop: 2,
  },
});
