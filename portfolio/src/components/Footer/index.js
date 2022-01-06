import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import content from '../../../content';

import styles from './styles';

export function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redes Sociais</Text>
      <FlatList
        data={content.rdsoc}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.rdsoc}>
            <View style={styles.rdsocCardIcon}>
              <Icon name={item.icon} size={30} color={item.colorIcon} />
            </View>
            <Text style={styles.rdsocTextButton}>{item.link}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
