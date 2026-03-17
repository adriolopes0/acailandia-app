import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
  TextInput, Alert, Image, Modal, KeyboardAvoidingView, Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const INITIAL_MENU = [
  {
    id: 'acai', category: '🍇 Açaí', items: [
      { id: 'a1', name: 'Açaí 300ml', price: 12.90, image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80' },
      { id: 'a2', name: 'Açaí 500ml', price: 18.90, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80' },
      { id: 'a3', name: 'Açaí 700ml', price: 24.90, image: 'https://images.unsplash.com/photo-1501746877-14782df58970?w=400&q=80' },
      { id: 'a4', name: 'Açaí Especial', price: 29.90, image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&q=80' },
    ],
  },
  {
    id: 'cremes', category: '🍦 Cremes', items: [
      { id: 'c1', name: 'Creme de Ninho', price: 6.00, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80' },
      { id: 'c2', name: 'Creme de Morango', price: 6.00, image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80' },
      { id: 'c3', name: 'Creme de Maracujá', price: 6.00, image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&q=80' },
      { id: 'c4', name: 'Creme de Chocolate', price: 6.00, image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&q=80' },
    ],
  },
  {
    id: 'sorvetes', category: '🍨 Sorvetes', items: [
      { id: 's1', name: 'Sorvete de Baunilha', price: 8.00, image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&q=80' },
      { id: 's2', name: 'Sorvete de Chocolate', price: 8.00, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80' },
      { id: 's3', name: 'Sorvete de Morango', price: 8.00, image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80' },
      { id: 's4', name: 'Sorvete de Creme', price: 8.00, image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80' },
    ],
  },
  {
    id: 'frutas', category: '🍓 Frutas', items: [
      { id: 'f1', name: 'Banana', price: 2.00, image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80' },
      { id: 'f2', name: 'Morango', price: 3.00, image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&q=80' },
      { id: 'f3', name: 'Kiwi', price: 3.50, image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?w=400&q=80' },
      { id: 'f4', name: 'Manga', price: 3.00, image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80' },
      { id: 'f5', name: 'Abacaxi', price: 2.50, image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&q=80' },
    ],
  },
  {
    id: 'complementos', category: '✨ Complementos', items: [
      { id: 'cp1', name: 'Granola', price: 2.00, image: 'https://images.unsplash.com/photo-1504308805006-0f7a5f1f0f71?w=400&q=80' },
      { id: 'cp2', name: 'Leite Condensado', price: 2.00, image: 'https://images.unsplash.com/photo-1628191081676-8f41cb451db9?w=400&q=80' },
      { id: 'cp3', name: 'Leite em Pó', price: 2.00, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80' },
      { id: 'cp4', name: 'Paçoca', price: 2.00, image: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?w=400&q=80' },
      { id: 'cp5', name: 'Nutella', price: 4.00, image: 'https://images.unsplash.com/photo-1575377427642-087cf684f29d?w=400&q=80' },
      { id: 'cp6', name: 'Amendoim', price: 2.00, image: 'https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?w=400&q=80' },
      { id: 'cp7', name: 'Gotas de Chocolate', price: 2.00, image: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=400&q=80' },
      { id: 'cp8', name: 'Coco Ralado', price: 2.00, image: 'https://images.unsplash.com/photo-1621236378699-8597faf6a176?w=400&q=80' },
    ],
  },
];

const CATEGORY_OPTIONS = [
  { id: 'acai', label: '🍇 Açaí' },
  { id: 'cremes', label: '🍦 Cremes' },
  { id: 'sorvetes', label: '🍨 Sorvetes' },
  { id: 'frutas', label: '🍓 Frutas' },
  { id: 'complementos', label: '✨ Complementos' },
];

export default function AdminScreen({ navigation }) {
  const [menu, setMenu] = useState(INITIAL_MENU);
  const [modalVisible, setModalVisible] = useState(false);
  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newCategory, setNewCategory] = useState('acai');
  const [expandedCategory, setExpandedCategory] = useState(null);

  const totalProducts = menu.reduce((s, c) => s + c.items.length, 0);

  const removeItem = (categoryId, itemId) => {
    Alert.alert('Remover produto', 'Tem certeza que deseja remover este produto?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Remover', style: 'destructive', onPress: () => {
          setMenu(prev => prev.map(cat =>
            cat.id === categoryId
              ? { ...cat, items: cat.items.filter(i => i.id !== itemId) }
              : cat
          ));
        }
      },
    ]);
  };

  const addItem = () => {
    if (!newName.trim() || !newPrice.trim()) {
      Alert.alert('Atenção', 'Preencha pelo menos o nome e o preço.');
      return;
    }
    const price = parseFloat(newPrice.replace(',', '.'));
    if (isNaN(price)) {
      Alert.alert('Atenção', 'Preço inválido.');
      return;
    }
    const cat = CATEGORY_OPTIONS.find(c => c.id === newCategory);
    const imageUrl = newImage.trim() ||
      `https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80`;
    const newItem = {
      id: `custom_${Date.now()}`,
      name: newName.trim(),
      price,
      image: imageUrl,
    };
    setMenu(prev => prev.map(c =>
      c.id === newCategory ? { ...c, items: [...c.items, newItem] } : c
    ));
    setNewName('');
    setNewPrice('');
    setNewImage('');
    setNewCategory('acai');
    setModalVisible(false);
    Alert.alert('✅ Sucesso', `"${newItem.name}" adicionado em ${cat.label}!`);
  };

  const handleLogout = () => {
    Alert.alert('Sair', 'Deseja sair do painel admin?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Sair', style: 'destructive', onPress: () => navigation.replace('Splash') },
    ]);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <View>
          <Text style={styles.topBarTitle}>Painel Admin</Text>
          <Text style={styles.topBarSub}>AçaíLândia Club House</Text>
        </View>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNum}>{menu.length}</Text>
          <Text style={styles.statLabel}>Categorias</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNum}>{totalProducts}</Text>
          <Text style={styles.statLabel}>Produtos</Text>
        </View>
        <TouchableOpacity style={[styles.statCard, styles.statCardAdd]} onPress={() => setModalVisible(true)}>
          <Text style={styles.statNumWhite}>+</Text>
          <Text style={styles.statLabelWhite}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {menu.map(cat => (
          <View key={cat.id} style={styles.section}>
            {/* Category header */}
            <TouchableOpacity
              style={styles.catHeader}
              onPress={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
              activeOpacity={0.8}
            >
              <Text style={styles.catTitle}>{cat.category}</Text>
              <View style={styles.catRight}>
                <View style={styles.countBadge}>
                  <Text style={styles.countText}>{cat.items.length}</Text>
                </View>
                <Text style={styles.chevron}>{expandedCategory === cat.id ? '▲' : '▼'}</Text>
              </View>
            </TouchableOpacity>

            {/* Items */}
            {expandedCategory === cat.id && cat.items.map(item => (
              <View key={item.id} style={styles.itemRow}>
                <Image source={{ uri: item.image }} style={styles.itemImg} />
                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
                </View>
                <TouchableOpacity
                  style={styles.removeBtn}
                  onPress={() => removeItem(cat.id, item.id)}
                >
                  <Text style={styles.removeBtnText}>🗑️</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
        <View style={{ height: 40 }} />
      </ScrollView>

      {/* Add Product Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalOverlay}
        >
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Novo Produto</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.modalClose}>✕</Text>
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.modalLabel}>Categoria</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.catPicker}>
                {CATEGORY_OPTIONS.map(opt => (
                  <TouchableOpacity
                    key={opt.id}
                    style={[styles.catChip, newCategory === opt.id && styles.catChipActive]}
                    onPress={() => setNewCategory(opt.id)}
                  >
                    <Text style={[styles.catChipText, newCategory === opt.id && styles.catChipTextActive]}>
                      {opt.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              <Text style={styles.modalLabel}>Nome do produto *</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Ex: Açaí 1L"
                placeholderTextColor="#bbb"
                value={newName}
                onChangeText={setNewName}
              />

              <Text style={styles.modalLabel}>Preço (R$) *</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Ex: 15,90"
                placeholderTextColor="#bbb"
                value={newPrice}
                onChangeText={setNewPrice}
                keyboardType="decimal-pad"
              />

              <Text style={styles.modalLabel}>URL da imagem (opcional)</Text>
              <TextInput
                style={[styles.modalInput, { height: 70 }]}
                placeholder="Cole aqui o link de uma imagem da internet"
                placeholderTextColor="#bbb"
                value={newImage}
                onChangeText={setNewImage}
                multiline
              />
              <Text style={styles.modalHint}>
                💡 Deixe em branco para usar a imagem padrão. Para trocar, cole o link de qualquer imagem da internet (ex: do Google Imagens → "Copiar endereço da imagem").
              </Text>

              <TouchableOpacity style={styles.addBtn} onPress={addItem}>
                <Text style={styles.addBtnText}>✅ Adicionar Produto</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F3FF' },

  topBar: {
    backgroundColor: '#5B1A5F',
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topBarTitle: { fontSize: 20, fontWeight: '900', color: '#fff' },
  topBarSub: { fontSize: 12, color: '#d8a7e5', marginTop: 2 },
  logoutBtn: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  logoutText: { color: '#fff', fontWeight: '700', fontSize: 13 },

  statsRow: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#5B1A5F',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  statCardAdd: { backgroundColor: '#5B1A5F' },
  statNum: { fontSize: 28, fontWeight: '900', color: '#5B1A5F' },
  statNumWhite: { fontSize: 28, fontWeight: '900', color: '#fff' },
  statLabel: { fontSize: 11, color: '#888', fontWeight: '600', marginTop: 2 },
  statLabelWhite: { fontSize: 11, color: '#d8a7e5', fontWeight: '600', marginTop: 2 },

  scroll: { paddingHorizontal: 16 },

  section: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  catHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  catTitle: { fontSize: 16, fontWeight: '800', color: '#3A0040' },
  catRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  countBadge: {
    backgroundColor: '#F3E8FF',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  countText: { fontSize: 12, fontWeight: '800', color: '#5B1A5F' },
  chevron: { fontSize: 12, color: '#888' },

  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#F5F0FF',
    gap: 12,
  },
  itemImg: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: '#EDE7F6',
  },
  itemInfo: { flex: 1 },
  itemName: { fontSize: 14, fontWeight: '700', color: '#222' },
  itemPrice: { fontSize: 13, color: '#5B1A5F', fontWeight: '600', marginTop: 2 },
  removeBtn: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#FFF0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeBtnText: { fontSize: 18 },

  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalCard: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 24,
    maxHeight: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: { fontSize: 20, fontWeight: '900', color: '#3A0040' },
  modalClose: { fontSize: 20, color: '#888' },
  modalLabel: { fontSize: 13, fontWeight: '700', color: '#555', marginBottom: 6 },
  catPicker: { marginBottom: 16 },
  catChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#F5F0FF',
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  catChipActive: { backgroundColor: '#5B1A5F', borderColor: '#5B1A5F' },
  catChipText: { fontSize: 13, fontWeight: '700', color: '#5B1A5F' },
  catChipTextActive: { color: '#fff' },
  modalInput: {
    backgroundColor: '#F5F0FF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 13,
    fontSize: 15,
    color: '#222',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E0D0FF',
  },
  modalHint: {
    fontSize: 12,
    color: '#888',
    marginBottom: 20,
    lineHeight: 18,
  },
  addBtn: {
    backgroundColor: '#5B1A5F',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 8,
  },
  addBtnText: { color: '#fff', fontSize: 15, fontWeight: '800' },
});