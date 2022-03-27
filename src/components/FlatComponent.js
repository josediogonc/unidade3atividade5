import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Badge, Avatar, Button as MaterialButton, Card, Title, Paragraph, Divider  } from 'react-native-paper';

const FlatComponent = ({ data }) => {

  const navigation = useNavigation();


  const navegar = () => {
    navigation.navigate('Tela2', { data: data });
  }

  return (
    <TouchableOpacity onPress={navegar} style={styles.container}>
      <View style={styles.subcontainer}>
      <Card mode='elevated'>
      <View style={styles.item}>
        <Card.Cover style={ { height: 370} } source={{ uri: data.image }} />
        </View>
        <View style={styles.item}>
        <Card.Content>
          <Title>{data.filme}</Title>
          <Paragraph>
            <Badge style={ {fontSize: 13}}>
              <Text >{data.ano}</Text></Badge>
          </Paragraph>
          <Paragraph>
            <Text>{data.estilo}</Text>
          </Paragraph>
        </Card.Content>
        <Divider />
        <Card.Actions>
          <MaterialButton>Detalhes</MaterialButton>
        </Card.Actions>
        </View>
      </Card>
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    minWidth : 250,
    marginVertical: 10,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start'
  },
  subcontainer: {
    minWidth : 250,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  
})

export default FlatComponent;