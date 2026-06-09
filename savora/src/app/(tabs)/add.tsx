import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const QUICK_CATEGORIES = [
  { name: 'Food', icon: 'coffee', color: '#ff6b6b' },
  { name: 'Transport', icon: 'truck', color: '#4ecdc4' },
  { name: 'Shopping', icon: 'shopping-bag', color: '#ffd93d' },
  { name: 'Bills', icon: 'file-text', color: '#6c63ff' },
  { name: 'Health', icon: 'heart', color: '#e056a0' },
  { name: 'Other', icon: 'more-horizontal', color: '#888899' },
];

export default function AddExpense() {
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Food');
  const [mockSms, setMockSms] = useState('₹350.00 debited from SBI A/c XX1234 on 12-Aug-24 via UPI to Zomato.');

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Add Expense</Text>
        </View>

        <View style={styles.amountSection}>
          <Text style={styles.amountLabel}>Enter Amount</Text>
          <View style={styles.amountRow}>
            <Text style={styles.currency}>₹</Text>
            <TextInput
              style={styles.amountInput}
              value={amount}
              onChangeText={setAmount}
              placeholder="0"
              placeholderTextColor="#555577"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Category</Text>
        </View>

        <View style={styles.categoryGrid}>
          {QUICK_CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.name}
              style={[
                styles.categoryChip,
                selectedCategory === cat.name && { borderColor: cat.color, backgroundColor: cat.color + '15' },
              ]}
              onPress={() => setSelectedCategory(cat.name)}>
              <View style={[styles.catChipIcon, { backgroundColor: cat.color + '20' }]}>
                <Feather name={cat.icon as any} color={cat.color} size={16} />
              </View>
              <Text style={[styles.catChipText, selectedCategory === cat.name && { color: '#fff' }]}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Description</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g. Starbucks coffee"
            placeholderTextColor="#555577"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Date</Text>
          <TouchableOpacity style={styles.dateInput}>
            <Feather name="calendar" color="#555577" size={18} />
            <Text style={styles.dateText}>Today, June 9</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addBtnText}>Add Expense</Text>
        </TouchableOpacity>

        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR EXTRACT FROM SMS</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.smsCard}>
          <View style={styles.smsCardHeader}>
            <Feather name="message-square" color="#6c63ff" size={18} />
            <Text style={styles.smsCardTitle}>SMS Extraction</Text>
          </View>
          <Text style={styles.smsCardDesc}>
            Paste a transaction SMS and our AI will automatically extract the details.
          </Text>
          <TextInput
            style={styles.smsInput}
            multiline
            numberOfLines={3}
            value={mockSms}
            onChangeText={setMockSms}
            placeholderTextColor="#555577"
          />
          <TouchableOpacity style={styles.smsBtn}>
            <Feather name="cpu" color="#fff" size={16} />
            <Text style={styles.smsBtnText}>Process with AI</Text>
          </TouchableOpacity>
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
  amountSection: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  amountLabel: {
    color: '#555577',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 12,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currency: {
    color: '#6c63ff',
    fontSize: 40,
    fontWeight: '300',
    marginRight: 4,
  },
  amountInput: {
    color: '#ffffff',
    fontSize: 48,
    fontWeight: '800',
    minWidth: 60,
    letterSpacing: -1,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 24,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1.5,
    borderColor: '#252545',
    gap: 8,
  },
  catChipIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  catChipText: {
    color: '#888899',
    fontSize: 13,
    fontWeight: '600',
  },
  inputGroup: {
    paddingHorizontal: 20,
    marginBottom: 18,
  },
  inputLabel: {
    color: '#888899',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  textInput: {
    backgroundColor: '#1a1a2e',
    borderRadius: 14,
    padding: 16,
    color: '#ffffff',
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#252545',
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    borderRadius: 14,
    padding: 16,
    gap: 10,
    borderWidth: 1,
    borderColor: '#252545',
  },
  dateText: {
    color: '#ffffff',
    fontSize: 15,
  },
  addBtn: {
    marginHorizontal: 20,
    backgroundColor: '#6c63ff',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    marginBottom: 28,
  },
  addBtnText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#252545',
  },
  dividerText: {
    color: '#555577',
    fontSize: 11,
    fontWeight: '700',
    marginHorizontal: 12,
    letterSpacing: 1,
  },
  smsCard: {
    marginHorizontal: 20,
    backgroundColor: '#1a1a2e',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#252545',
  },
  smsCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  smsCardTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  smsCardDesc: {
    color: '#555577',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 14,
  },
  smsInput: {
    backgroundColor: '#0f0f23',
    borderRadius: 12,
    padding: 14,
    color: '#888899',
    fontSize: 13,
    borderWidth: 1,
    borderColor: '#252545',
    marginBottom: 14,
    lineHeight: 20,
  },
  smsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6c63ff',
    borderRadius: 14,
    padding: 14,
    gap: 8,
  },
  smsBtnText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
});
