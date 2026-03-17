import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Platform,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const STORES = [
  {
    id: 1,
    name: 'Loja Parangaba',
    address: 'Av. Dr. Silas Munguba, 1555 - Loja 10 - Parangaba, Fortaleza - CE.',
    status: 'open', // 'open' | 'coming_soon' | 'closed'
    phone: '(85) 99999-0001',
    lat: -3.7749,
    lng: -38.5614,
  },
  {
    id: 2,
    name: 'Loja Montese I',
    address: 'R. Conegundes Rodrigues, 425 - Montese, Fortaleza - CE.',
    status: 'open',
    phone: '(85) 99999-0002',
    lat: -3.7612,
    lng: -38.5487,
  },
  {
    id: 3,
    name: 'Loja Benfica',
    address: 'R. Carlos Câmara, 1738 - Benfica, Fortaleza - CE.',
    status: 'coming_soon',
    phone: '(85) 99999-0003',
    lat: -3.7423,
    lng: -38.5416,
  },
  {
    id: 4,
    name: 'Loja Montese II',
    address: 'R. Vasco da Gama, 913 - Montese, Fortaleza - CE.',
    status: 'open',
    phone: '(85) 99999-0004',
    lat: -3.7589,
    lng: -38.5501,
  },
];

const ACTIVE_COUNT = STORES.filter(s => s.status === 'open').length;

const STATUS_CONFIG = {
  open: { label: 'ABERTA AGORA', color: '#5B1A5F', bg: '#F3E8FF' },
  coming_soon: { label: 'EM BREVE', color: '#9A6B00', bg: '#FFF8E1' },
  closed: { label: 'FECHADA', color: '#B00020', bg: '#FFEBEE' },
};

const openMap = (lat, lng, name) => {
  const scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
  const url =
    Platform.OS === 'ios'
      ? `maps:0,0?q=${name}@${lat},${lng}`
      : `geo:${lat},${lng}?q=${lat},${lng}(${encodeURIComponent(name)})`;
  Linking.openURL(url).catch(() => {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
    );
  });
};

const callPhone = phone => {
  Linking.openURL(`tel:${phone.replace(/\D/g, '')}`);
};

const StoreCard = ({ store }) => {
  const statusCfg = STATUS_CONFIG[store.status];
  const isComingSoon = store.status === 'coming_soon';

  return (
    <View style={styles.card}>
      {/* Header row */}
      <View style={styles.cardHeader}>
        <View style={styles.storeIconWrap}>
          <Text style={styles.storeIcon}>🏪</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: statusCfg.bg }]}>
          <Text style={[styles.badgeText, { color: statusCfg.color }]}>
            {statusCfg.label}
          </Text>
        </View>
      </View>

      {/* Name & address */}
      <Text style={styles.storeName}>{store.name}</Text>
      <Text style={styles.storeAddress}>{store.address}</Text>

      {/* Action buttons */}
      <View style={styles.cardActions}>
        <TouchableOpacity
          style={[
            styles.mapBtn,
            isComingSoon && styles.mapBtnDisabled,
          ]}
          onPress={() =>
            !isComingSoon && openMap(store.lat, store.lng, store.name)
          }
          activeOpacity={isComingSoon ? 1 : 0.8}
        >
          <Text style={styles.mapBtnIcon}>📍</Text>
          <Text
            style={[
              styles.mapBtnText,
              isComingSoon && styles.mapBtnTextDisabled,
            ]}
          >
            {isComingSoon ? 'VER DETALHES' : 'VER NO MAPA'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.phoneBtn}
          onPress={() => callPhone(store.phone)}
          activeOpacity={0.8}
        >
          <Text style={styles.phoneIcon}>📞</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const StoresScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>AçaíLândia</Text>
        <TouchableOpacity style={styles.cartBtn}>
          <Text style={styles.cartIcon}>🛒</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Page heading */}
        <Text style={styles.pageTitle}>Nossas Lojas</Text>
        <Text style={styles.pageSubtitle}>
          Encontre a AçaíLândia mais próxima de você e viva a experiência do
          Velvet Orchard.
        </Text>

        {/* Map placeholder */}
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapPlaceholderIcon}>🗺️</Text>
          <View style={styles.activePill}>
            <View style={styles.activeDot} />
            <Text style={styles.activePillText}>
              {ACTIVE_COUNT} UNIDADES ATIVAS
            </Text>
          </View>
          <TouchableOpacity style={styles.locationBtn}>
            <Text style={styles.locationBtnIcon}>🎯</Text>
          </TouchableOpacity>
        </View>

        {/* Store cards */}
        {STORES.map(store => (
          <StoreCard key={store.id} store={store} />
        ))}

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  /* Top bar */
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#F7F7F7',
  },
  backBtn: {
    padding: 4,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: '#5B1A5F',
    fontWeight: '700',
  },
  topBarTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#5B1A5F',
  },
  cartBtn: { padding: 4 },
  cartIcon: { fontSize: 22 },

  /* Scroll content */
  scroll: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1A1A1A',
    marginBottom: 6,
  },
  pageSubtitle: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    marginBottom: 20,
  },

  /* Map placeholder */
  mapPlaceholder: {
    height: 160,
    backgroundColor: '#EDE7F6',
    borderRadius: 16,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  mapPlaceholderIcon: { fontSize: 52, opacity: 0.35 },
  activePill: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#8A2BE2',
    marginRight: 6,
  },
  activePillText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#333',
    letterSpacing: 0.5,
  },
  locationBtn: {
    position: 'absolute',
    bottom: 12,
    right: 16,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#5B1A5F',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#5B1A5F',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  locationBtnIcon: { fontSize: 18 },

  /* Store card */
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  storeIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EDE7F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storeIcon: { fontSize: 20 },
  badge: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  storeName: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  storeAddress: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    marginBottom: 14,
  },

  /* Card action buttons */
  cardActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  mapBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5B1A5F',
    borderRadius: 30,
    paddingVertical: 12,
    gap: 6,
  },
  mapBtnDisabled: {
    backgroundColor: '#E0E0E0',
  },
  mapBtnIcon: { fontSize: 14 },
  mapBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
    letterSpacing: 0.5,
  },
  mapBtnTextDisabled: {
    color: '#888',
  },
  phoneBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  phoneIcon: { fontSize: 18 },

});

export default StoresScreen;