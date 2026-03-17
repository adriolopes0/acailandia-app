import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ADMIN_EMAIL = 'admin@acailandia.com.br';
const ADMIN_PASSWORD = 'acai12345';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Atenção', 'Preencha e-mail e senha.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        navigation.replace('Admin');
      } else {
        Alert.alert('Erro', 'E-mail ou senha incorretos.');
      }
    }, 800);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">

          {/* Header */}
          <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>

          <View style={styles.logoWrap}>
            <Text style={styles.logoEmoji}>🍇</Text>
            <Text style={styles.logoTitle}>AçaíLândia</Text>
            <Text style={styles.logoSub}>Painel Administrativo</Text>
          </View>

          {/* Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Entrar</Text>
            <Text style={styles.cardSub}>Acesso restrito ao administrador</Text>

            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#bbb"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.label}>Senha</Text>
            <View style={styles.passWrap}>
              <TextInput
                style={styles.inputPass}
                placeholder="••••••••"
                placeholderTextColor="#bbb"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPass}
              />
              <TouchableOpacity onPress={() => setShowPass(!showPass)} style={styles.eyeBtn}>
                <Text style={styles.eyeIcon}>{showPass ? '🙈' : '👁️'}</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[styles.loginBtn, loading && styles.loginBtnDisabled]}
              onPress={handleLogin}
              activeOpacity={0.85}
              disabled={loading}
            >
              <Text style={styles.loginBtnText}>
                {loading ? 'Verificando...' : 'Entrar'}
              </Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#5B1A5F' },
  scroll: { flexGrow: 1, padding: 24 },
  backBtn: { marginBottom: 16 },
  backIcon: { fontSize: 26, color: '#fff', fontWeight: '700' },
  logoWrap: { alignItems: 'center', marginBottom: 36 },
  logoEmoji: { fontSize: 56, marginBottom: 8 },
  logoTitle: { fontSize: 28, fontWeight: '900', color: '#fff' },
  logoSub: { fontSize: 13, color: '#d8a7e5', marginTop: 4 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  cardTitle: { fontSize: 22, fontWeight: '900', color: '#3A0040', marginBottom: 4 },
  cardSub: { fontSize: 13, color: '#888', marginBottom: 24 },
  label: { fontSize: 13, fontWeight: '700', color: '#555', marginBottom: 6 },
  input: {
    backgroundColor: '#F5F0FF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: '#222',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0D0FF',
  },
  passWrap: {
    flexDirection: 'row',
    backgroundColor: '#F5F0FF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0D0FF',
    marginBottom: 24,
    alignItems: 'center',
  },
  inputPass: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: '#222',
  },
  eyeBtn: { paddingHorizontal: 14 },
  eyeIcon: { fontSize: 18 },
  loginBtn: {
    backgroundColor: '#5B1A5F',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
  },
  loginBtnDisabled: { backgroundColor: '#aaa' },
  loginBtnText: { color: '#fff', fontSize: 16, fontWeight: '800' },
});