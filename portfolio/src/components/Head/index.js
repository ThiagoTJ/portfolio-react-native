import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

import styles from './styles';

export function Head(props) {
  const [favorito, setFavorito] = useState(null);

  const indicador = () => {
    if (favorito === '#F58e6b') {
      setFavorito(null);
    } else {
      setFavorito('#F58e6b');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardAvatar}>
        <Image style={styles.avatar} source={{uri: `${props.avatar}`}} />
      </View>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.nome}>{props.name}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          indicador();
        }}>
        <Icon name="target-two" size={40} color={favorito} />
      </TouchableOpacity>
    </View>
  );
}
