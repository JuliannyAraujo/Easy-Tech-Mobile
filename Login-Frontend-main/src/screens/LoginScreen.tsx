import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Definimos aqui o tipo para a propriedade navigation
type Props = {
  navigation: NativeStackNavigationProp<any, any>;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Estado para controle de carregamento
  const [error, setError] = useState<string | null>(null); // Estado para exibir erro

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    setError(null); // Limpa erros anteriores
    setLoading(true); // Começa o carregamento

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Credenciais inválidas');
      }

      const data = await response.json();
      const token = data.token;

      // Armazene o token JWT localmente
      await AsyncStorage.setItem('token', token);

      // Navega para a tela Home após o login bem-sucedido
      navigation.navigate('Home');
    } catch (error) {
      setError(error.message || 'Erro ao fazer login');
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acesso à Energia Consciente</Text>
      
      {error && <Text style={styles.errorText}>{error}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={username}
        onChangeText={setUsername}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.linkText}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e0f7fa', // Azul claro, remete à natureza e energia limpa
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#388e3c', // Verde escuro, associado à sustentabilidade e ao meio ambiente
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderColor: '#388e3c', // Borda verde, remetendo à natureza e sustentabilidade
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#388e3c', // Verde que remete à energia renovável
    padding: 16,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  linkText: {
    fontSize: 16,
    color: '#388e3c', // Cor verde para o link de cadastro
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
