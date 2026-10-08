# Lista de Compras – CheckPoint 2

Aplicativo em React Native (Expo) que demonstra a combinação do componente `FlatList` com o hook `useState`.

## Funcionalidades

- Título do app ("Lista de Compras")
- Campo de texto (`TextInput`) para digitar um novo item
- Botão **Adicionar**, que insere o item na lista usando `useState`, **sem `.push()`** (é criado um novo array com `[...lista, novoItem]`)
- Lista exibida com `FlatList`

## Tecnologias

- React Native
- Expo (Expo Router)
- TypeScript

## Como rodar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor:

```bash
npx expo start
```

3. Abra o app:
   - No celular, escaneie o QR Code com o app **Expo Go**; ou
   - No navegador, pressione `w` no terminal.

O código principal do app está em `src/app/index.tsx`.

## Prints do app

### 1. Lista vazia, ao abrir o app

![Lista vazia](prints/1-lista-vazia.png)

### 2. Lista depois de adicionar 1 item

![Lista com 1 item](prints/2-um-item.png)

### 3. Lista depois de adicionar 5 itens

![Lista com 5 itens](prints/3-cinco-itens.png)

## Autor

Gustavo Franzoti
