import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export function Body(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tecnologias</Text>
      <Text style={[styles.content, {textAlign: 'left'}]}>{props.content}</Text>
      <View>
        <Text style={styles.subtitle}>Sobre mim</Text>
        <Text style={styles.content}> {props.bio} </Text>
      </View>
    </View>
  );
}
