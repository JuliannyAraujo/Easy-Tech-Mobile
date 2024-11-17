import { Ionicons } from '@expo/vector-icons'; // Importando ícones do Ionicons
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CadastroScreen: React.FC<any> = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleCadastro = async () => {
    if (senha !== confirmarSenha) {
      alert('As senhas não correspondem!');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, cpf, email, senha, cep, endereco, numero, complemento, telefone }),
      });

      if (!response.ok) {
        throw new Error('Erro ao realizar o cadastro');
      }

      // Navega para a tela de login após o cadastro bem-sucedido
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao realizar o cadastro:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Conta</Text>

      <Text style={styles.sectionTitle}>Informações Pessoais</Text>

      {/* Campos de Cadastro */}
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={24} color="#388e3c" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="id-card-outline" size={24} color="#388e3c" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={24} color="#388e3c" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={24} color="#388e3c" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Crie uma senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={24} color="#388e3c" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Repita a senha"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="location-outline" size={24} color="#388e3c" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          value={cep}
          onChangeText={setCep}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="home-outline" size={24} color="#388e3c" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={endereco}
          onChangeText={setEndereco}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="home-outline" size={24} color="#388e3c" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Número"
          value={numero}
          onChangeText={setNumero}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="home-outline" size={24} color="#388e3c" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Complemento"
          value={complemento}
          onChangeText={setComplemento}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="call-outline" size={24} color="#388e3c" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#eaf8e0', // Verde claro remetendo à energia limpa e sustentabilidade
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#388e3c', // Verde sustentável
    textAlign: 'center',
    marginVertical: 30,
    fontFamily: 'Roboto-Bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 15,
    color: '#388e3c',
    fontFamily: 'Roboto-Regular',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 4,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Roboto-Regular',
  },
  button: {
    backgroundColor: '#388e3c', // Verde forte
    padding: 16,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Roboto-Medium',
  },
  linkText: {
    fontSize: 16,
    color: '#388e3c',
    marginTop: 20,
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
});

export default CadastroScreen;
