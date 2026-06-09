import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

const CATEGORIES = [
  { id: 1, name: 'Food', icon: 'coffee', color: '#ff6b6b', spent: '₹4,500', budget: '₹6,000' },
  { id: 2, name: 'Transport', icon: 'truck', color: '#4ecdc4', spent: '₹2,200', budget: '₹3,000' },
  { id: 3, name: 'Shopping', icon: 'shopping-bag', color: '#ffd93d', spent: '₹3,000', budget: '₹5,000' },
  { id: 4, name: 'Bills', icon: 'file-text', color: '#6c63ff', spent: '₹1,800', budget: '₹2,000' },
];

const TRANSACTIONS = [
  { id: 1, merchant: 'Zomato', category: 'Food Delivery', amount: '-₹420', time: '2:30 PM', icon: 'coffee', color: '#ff6b6b', isExpense: true },
  { id: 2, merchant: 'Salary Credited', category: 'Income', amount: '+₹45,000', time: '9:00 AM', icon: 'briefcase', color: '#4ecdc4', isExpense: false },
  { id: 3, merchant: 'Uber', category: 'Transportation', amount: '-₹210', time: 'Yesterday', icon: 'truck', color: '#4ecdc4', isExpense: true },
  { id: 4, merchant: 'Netflix', category: 'Entertainment', amount: '-₹649', time: 'Yesterday', icon: 'play-circle', color: '#e056a0', isExpense: true },
  { id: 5, merchant: 'Amazon', category: 'Shopping', amount: '-₹1,299', time: 'Mon', icon: 'shopping-bag', color: '#ffd93d', isExpense: true },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Evening</Text>
            <Text style={styles.userName}>Soumik 👋</Text>
          </View>
          <TouchableOpacity style={styles.notifBtn}>
            <Feather name="bell" color="#fff" size={20} />
            <View style={styles.notifDot} />
          </TouchableOpacity>
        </View>

        <View style={styles.balanceCard}>
          <View style={styles.balanceCardInner}>
            <View style={styles.balanceRow}>
              <View>
                <Text style={styles.balanceLabel}>Total Balance</Text>
                <Text style={styles.balanceAmount}>₹14,580</Text>
              </View>
              <View style={styles.balanceIconWrap}>
                <Feather name="credit-card" color="#fff" size={22} />
              </View>
            </View>

            <View style={styles.balanceStatsRow}>
              <View style={styles.balanceStat}>
                <View style={styles.statIconWrap}>
                  <Feather name="arrow-down-left" color="#4ecdc4" size={14} />
                </View>
                <View>
                  <Text style={styles.statLabel}>Income</Text>
                  <Text style={styles.statValue}>₹45,000</Text>
                </View>
              </View>
              <View style={styles.divider} />
              <View style={styles.balanceStat}>
                <View style={[styles.statIconWrap, { backgroundColor: 'rgba(255,107,107,0.15)' }]}>
                  <Feather name="arrow-up-right" color="#ff6b6b" size={14} />
                </View>
                <View>
                  <Text style={styles.statLabel}>Expenses</Text>
                  <Text style={styles.statValue}>₹8,420</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Budget Overview</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 20, paddingRight: 8 }}>
          {CATEGORIES.map((cat) => {
            const spentNum = parseInt(cat.spent.replace(/[₹,]/g, ''));
            const budgetNum = parseInt(cat.budget.replace(/[₹,]/g, ''));
            const progress = spentNum / budgetNum;
            return (
              <View key={cat.id} style={styles.budgetCard}>
                <View style={[styles.categoryIcon, { backgroundColor: cat.color + '20' }]}>
                  <Feather name={cat.icon as any} color={cat.color} size={18} />
                </View>
                <Text style={styles.categoryName}>{cat.name}</Text>
                <Text style={styles.categorySpent}>{cat.spent}</Text>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: `${progress * 100}%`, backgroundColor: cat.color }]} />
                </View>
                <Text style={styles.categoryBudget}>of {cat.budget}</Text>
              </View>
            );
          })}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {TRANSACTIONS.map((tx) => (
          <TouchableOpacity key={tx.id} style={styles.txRow}>
            <View style={[styles.txIcon, { backgroundColor: tx.color + '20' }]}>
              <Feather name={tx.icon as any} color={tx.color} size={18} />
            </View>
            <View style={styles.txInfo}>
              <Text style={styles.txMerchant}>{tx.merchant}</Text>
              <Text style={styles.txCategory}>{tx.category} • {tx.time}</Text>
            </View>
            <Text style={[styles.txAmount, { color: tx.isExpense ? '#ff6b6b' : '#4ecdc4' }]}>
              {tx.amount}
            </Text>
          </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  greeting: {
    color: '#888899',
    fontSize: 14,
    fontWeight: '500',
  },
  userName: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 4,
  },
  notifBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#252545',
  },
  notifDot: {
    position: 'absolute',
    top: 10,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ff6b6b',
  },
  balanceCard: {
    marginHorizontal: 20,
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 28,
  },
  balanceCardInner: {
    backgroundColor: '#6c63ff',
    borderRadius: 24,
    padding: 24,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  balanceLabel: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    fontWeight: '500',
  },
  balanceAmount: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: '800',
    marginTop: 4,
    letterSpacing: -1,
  },
  balanceIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceStatsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 16,
  },
  balanceStat: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  statIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: 'rgba(78,205,196,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 11,
    fontWeight: '500',
  },
  statValue: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 2,
  },
  divider: {
    width: 1,
    height: 36,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  seeAll: {
    color: '#6c63ff',
    fontSize: 14,
    fontWeight: '600',
  },
  budgetCard: {
    backgroundColor: '#1a1a2e',
    borderRadius: 20,
    padding: 16,
    width: 140,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#252545',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  categoryName: {
    color: '#888899',
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 4,
  },
  categorySpent: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#252545',
    borderRadius: 3,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  categoryBudget: {
    color: '#555577',
    fontSize: 11,
    fontWeight: '500',
  },
  txRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a2e',
  },
  txIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  txInfo: {
    flex: 1,
  },
  txMerchant: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  txCategory: {
    color: '#555577',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 3,
  },
  txAmount: {
    fontSize: 16,
    fontWeight: '700',
  },
});
