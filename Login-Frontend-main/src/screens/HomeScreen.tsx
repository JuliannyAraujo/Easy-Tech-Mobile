import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProvedorEstadoGlobal } from '../hooks/EstadoGlobal';

// Definimos aqui o tipo para a propriedade navigation
type HomeScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  // Funções para navegação
  const navigateTo = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <NativeBaseProvider>
      <ProvedorEstadoGlobal>
        <View style={styles.container}>
          <Text style={styles.title}>Bem-vindo ao Educativo Energético</Text>
          <Text style={styles.subtitle}>
            Explore e aprenda sobre a economia de energia e práticas sustentáveis.
          </Text>

          {/* Módulos de Educação */}
          <TouchableOpacity style={styles.button} onPress={() => navigateTo('ModulosDeEducacao')}>
            <Text style={styles.buttonText}>Módulos de Educação</Text>
          </TouchableOpacity>

          {/* Desafios e Jogos */}
          <TouchableOpacity style={styles.button} onPress={() => navigateTo('DesafiosEJogos')}>
            <Text style={styles.buttonText}>Desafios e Jogos</Text>
          </TouchableOpacity>

          {/* Progresso e Resultados */}
          <TouchableOpacity style={styles.button} onPress={() => navigateTo('ProgressoEResultados')}>
            <Text style={styles.buttonText}>Progresso e Resultados</Text>
          </TouchableOpacity>
        </View>
      </ProvedorEstadoGlobal>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e0f7fa', // Azul claro, remetendo à energia limpa e natureza
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
    color: '#004d40', // Tom de verde mais escuro, harmônico com o tema
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#388e3c', // Verde forte, associado à sustentabilidade
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
});

export default HomeScreen;
