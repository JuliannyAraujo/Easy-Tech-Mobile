import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ProvedorEstadoGlobal } from '../hooks/EstadoGlobal';

type ModulosDeEducacaoProps = {
  navigation: NativeStackNavigationProp<any>;
};

const ModulosDeEducacaoScreen: React.FC<ModulosDeEducacaoProps> = ({ navigation }) => {
  // Função de navegação
  const navigateTo = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <NativeBaseProvider>
      <ProvedorEstadoGlobal>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Título e Introdução */}
          <Text style={styles.title}>Módulos de Educação sobre Economia de Energia</Text>
          <Text style={styles.subtitle}>
            Aprenda sobre práticas sustentáveis, como reduzir o consumo de energia e promover a economia
            de energia em sua vida diária.
          </Text>

          {/* Módulo 1: Introdução à Economia de Energia */}
          <TouchableOpacity style={styles.button} onPress={() => navigateTo('Módulo1')}>
            <Text style={styles.buttonText}>Introdução à Economia de Energia</Text>
          </TouchableOpacity>

          {/* Módulo 2: Energias Renováveis */}
          <TouchableOpacity style={styles.button} onPress={() => navigateTo('Módulo2')}>
            <Text style={styles.buttonText}>Energias Renováveis</Text>
          </TouchableOpacity>

          {/* Módulo 3: Dicas de Economia de Energia em Casa */}
          <TouchableOpacity style={styles.button} onPress={() => navigateTo('Módulo3')}>
            <Text style={styles.buttonText}>Dicas de Economia de Energia em Casa</Text>
          </TouchableOpacity>

          {/* Módulo 4: Sustentabilidade e o Futuro da Energia */}
          <TouchableOpacity style={styles.button} onPress={() => navigateTo('Módulo4')}>
            <Text style={styles.buttonText}>Sustentabilidade e o Futuro da Energia</Text>
          </TouchableOpacity>

          {/* Módulo 5: A Importância da Eficiência Energética */}
          <TouchableOpacity style={styles.button} onPress={() => navigateTo('Módulo5')}>
            <Text style={styles.buttonText}>A Importância da Eficiência Energética</Text>
          </TouchableOpacity>

          {/* Botão de Voltar */}
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </ScrollView>
      </ProvedorEstadoGlobal>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e0f7fa', // Azul claro, associando com energia limpa
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#388e3c', // Verde sustentável
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#004d40', // Verde escuro
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#388e3c', // Verde forte para botões
    padding: 16,
    borderRadius: 8,
    marginBottom: 15,
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
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#ccc',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ModulosDeEducacaoScreen;
