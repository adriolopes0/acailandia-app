import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MENU = [
  {
    id: 'acai',
    category: '🍇 Açaí',
    subtitle: 'Diversos tamanhos e tipos de açaí.',
    items: [
      { id: 'a1', name: 'Açaí 300ml', price: 12.90, image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80' },
      { id: 'a2', name: 'Açaí 500ml', price: 18.90, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80' },
      { id: 'a3', name: 'Açaí 700ml', price: 24.90, image: 'https://images.unsplash.com/photo-1501746877-14782df58970?w=400&q=80' },
      { id: 'a4', name: 'Açaí Especial', price: 29.90, image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&q=80' },
    ],
  },
  {
    id: 'cremes',
    category: '🍦 Cremes',
    subtitle: 'Produtos cremosos para combinar com o açaí.',
    items: [
      { id: 'c1', name: 'Creme de Ninho', price: 6.00, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80' },
      { id: 'c2', name: 'Creme de Morango', price: 6.00, image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80' },
      { id: 'c3', name: 'Creme de Maracujá', price: 6.00, image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=400&q=80' },
      { id: 'c4', name: 'Creme de Chocolate', price: 6.00, image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&q=80' },
    ],
  },
  {
    id: 'sorvetes',
    category: '🍨 Sorvetes',
    subtitle: 'Sabores de sorvete disponíveis na loja.',
    items: [
      { id: 's1', name: 'Sorvete de Baunilha', price: 8.00, image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&q=80' },
      { id: 's2', name: 'Sorvete de Chocolate', price: 8.00, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80' },
      { id: 's3', name: 'Sorvete de Morango', price: 8.00, image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80' },
      { id: 's4', name: 'Sorvete de Creme', price: 8.00, image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80' },
    ],
  },
  {
    id: 'frutas',
    category: '🍓 Frutas',
    subtitle: 'Frutas naturais para montagem do açaí.',
    items: [
      { id: 'f1', name: 'Banana', price: 2.00, image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80' },
      { id: 'f2', name: 'Morango', price: 3.00, image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&q=80' },
      { id: 'f3', name: 'Kiwi', price: 3.50, image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?w=400&q=80' },
      { id: 'f4', name: 'Manga', price: 3.00, image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80' },
      { id: 'f5', name: 'Abacaxi', price: 2.50, image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&q=80' },
    ],
  },
  {
    id: 'complementos',
    category: '✨ Complementos',
    subtitle: 'Itens adicionais para personalização.',
    items: [
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

const WHATSAPP_NUMBER = '5585999157549';

export default function DeliveryScreen({ navigation }) {
  const [selected, setSelected] = useState({});

  const toggleItem = (item) => {
    setSelected(prev => {
      const updated = { ...prev };
      if (updated[item.id]) {
        delete updated[item.id];
      } else {
        updated[item.id] = item;
      }
      return updated;
    });
  };

  const isSelected = (id) => !!selected[id];

  const selectedList = Object.values(selected);
  const total = selectedList.reduce((sum, i) => sum + i.price, 0);
  const totalCount = selectedList.length;

  const finalizarPedido = () => {
    if (selectedList.length === 0) {
      Alert.alert('Atenção', 'Selecione pelo menos um item para continuar.');
      return;
    }

    const linhas = selectedList.map(i => `• ${i.name} - R$ ${i.price.toFixed(2)}`).join('\n');
    const mensagem =
      `🍇 *Olá! Gostaria de fazer um pedido:*\n\n` +
      `${linhas}\n\n` +
      `💰 *Total: R$ ${total.toFixed(2)}*\n\n` +
      `Aguardo confirmação! 😊`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    Linking.openURL(url).catch(() =>
      Alert.alert('Erro', 'Não foi possível abrir o WhatsApp.')
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Delivery</Text>
        <View style={styles.cartBadgeWrap}>
          {totalCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{totalCount}</Text>
            </View>
          )}
          <Text style={styles.cartIcon}>🛒</Text>
        </View>
      </View>

      {/* Hero */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Monte seu Açaí 🍇</Text>
        <Text style={styles.heroSub}>Selecione os itens e finalize pelo WhatsApp</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {MENU.map(section => (
          <View key={section.id} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.category}</Text>
            <Text style={styles.sectionSub}>{section.subtitle}</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.hScroll}
            >
              {section.items.map(item => {
                const sel = isSelected(item.id);
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={[styles.card, sel && styles.cardSelected]}
                    onPress={() => toggleItem(item)}
                    activeOpacity={0.85}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={styles.cardImg}
                      onError={(e) => e.target.setNativeProps({
                        source: [{ uri: `https://picsum.photos/seed/${item.id}/400/300` }]
                      })}
                    />
                    {sel && (
                      <View style={styles.checkBadge}>
                        <Text style={styles.checkText}>✓</Text>
                      </View>
                    )}
                    <View style={styles.cardBody}>
                      <Text style={styles.cardName} numberOfLines={2}>{item.name}</Text>
                      <Text style={styles.cardPrice}>R$ {item.price.toFixed(2)}</Text>
                    </View>
                    <View style={[styles.addBtn, sel && styles.addBtnSelected]}>
                      <Text style={styles.addBtnText}>{sel ? '✓ Adicionado' : '+ Adicionar'}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        ))}
        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        {totalCount > 0 && (
          <View style={styles.footerSummary}>
            <Text style={styles.footerCount}>{totalCount} {totalCount === 1 ? 'item' : 'itens'} selecionados</Text>
            <Text style={styles.footerTotal}>R$ {total.toFixed(2)}</Text>
          </View>
        )}
        <TouchableOpacity
          style={[styles.finalizarBtn, totalCount === 0 && styles.finalizarBtnDisabled]}
          onPress={finalizarPedido}
          activeOpacity={0.85}
        >
          <Text style={styles.finalizarIcon}>💬</Text>
          <Text style={styles.finalizarText}>Finalizar Pedido no WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F3FF' },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#5B1A5F',
  },
  backBtn: { padding: 4 },
  backIcon: { fontSize: 24, color: '#fff', fontWeight: '700' },
  topBarTitle: { fontSize: 18, fontWeight: '800', color: '#fff' },
  cartBadgeWrap: { position: 'relative', padding: 4 },
  cartIcon: { fontSize: 24 },
  cartBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: '#F2C94C',
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  cartBadgeText: { fontSize: 10, fontWeight: '900', color: '#333' },

  hero: {
    backgroundColor: '#5B1A5F',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 4,
  },
  heroTitle: { fontSize: 24, fontWeight: '900', color: '#fff' },
  heroSub: { fontSize: 13, color: '#d8a7e5', marginTop: 4 },

  scroll: { paddingTop: 16 },

  section: { marginBottom: 24 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#3A0040',
    paddingHorizontal: 20,
    marginBottom: 2,
  },
  sectionSub: {
    fontSize: 12,
    color: '#888',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  hScroll: { paddingHorizontal: 20, gap: 12 },

  card: {
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#5B1A5F',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    borderWidth: 2,
    borderColor: 'transparent',
  },
  cardSelected: {
    borderColor: '#5B1A5F',
  },
  cardImg: { width: '100%', height: 110 },
  checkBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#5B1A5F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkText: { color: '#fff', fontSize: 13, fontWeight: '900' },
  cardBody: { padding: 10, paddingBottom: 6 },
  cardName: { fontSize: 13, fontWeight: '700', color: '#222', marginBottom: 4 },
  cardPrice: { fontSize: 13, fontWeight: '800', color: '#5B1A5F' },
  addBtn: {
    margin: 8,
    marginTop: 4,
    backgroundColor: '#F3E8FF',
    borderRadius: 20,
    paddingVertical: 7,
    alignItems: 'center',
  },
  addBtnSelected: { backgroundColor: '#5B1A5F' },
  addBtnText: { fontSize: 11, fontWeight: '800', color: '#5B1A5F' },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -4 },
  },
  footerSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  footerCount: { fontSize: 13, color: '#666', fontWeight: '600' },
  footerTotal: { fontSize: 16, fontWeight: '900', color: '#5B1A5F' },
  finalizarBtn: {
    backgroundColor: '#25D366',
    borderRadius: 30,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  finalizarBtnDisabled: { backgroundColor: '#B0B0B0' },
  finalizarIcon: { fontSize: 18 },
  finalizarText: { color: '#fff', fontSize: 15, fontWeight: '800' },
});