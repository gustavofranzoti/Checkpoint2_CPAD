import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

type Item = { id: string; nome: string };

export default function Index() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState<Item[]>([]);

  function adicionarItem() {
    if (item.trim() === '') return;

    const novoItem: Item = { id: Date.now().toString(), nome: item.trim() };

    // Cria um novo array (sem .push()) usando spread
    setLista([...lista, novoItem]);
    setItem('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>

      <View style={styles.linha}>
        <TextInput
          style={styles.input}
          placeholder="Digite um item"
          value={item}
          onChangeText={setItem}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarItem}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={lista}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <Text style={styles.itemLista}>• {item.nome}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 20, backgroundColor: '#fff' },
  titulo: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  linha: { flexDirection: 'row', marginBottom: 20 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 10,
  },
  botao: {
    backgroundColor: '#2e7d32',
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderRadius: 8,
  },
  textoBotao: { color: '#fff', fontWeight: 'bold' },
  itemLista: { fontSize: 18, paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#eee' },
});