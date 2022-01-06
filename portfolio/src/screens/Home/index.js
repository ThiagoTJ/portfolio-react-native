import React from 'react';
import {View, FlatList, ScrollView} from 'react-native';

import content from '../../../content';
import {Body} from '../../components/Body';
import {Head} from '../../components/Head';
import {Footer} from '../../components/Footer';

import styles from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={content.bio}
        renderItem={({item}) => (
          <>
            <Head title={'Bem-Vindo'} name={item.name} avatar={item.avatar} />
            <Body content={item.tecs} bio={item.myBio}/>
            <Footer />
          </>
        )}
      />
    </View>
  );
}
