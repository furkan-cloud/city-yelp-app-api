import React from 'react';
import {
  TouchableOpacity,
  Image,
  Dimensions,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const RestaurantItem = (props) => {
  const prices = props.restaurant.price;

  const isExpensive = (prices) => {
      var text;
    let setPrice = 0;
    for (let i = 0; i < prices; i++) {
      setPrice += 1;
    }
    switch (setPrice) {
      case 1:
        text = '💲';
        break;
      case 2:
        text = '💲💲';
        break;
      case 3:
        text = '💲💲💲';
        break;
      case 4:
        text = '💲💲💲💲';
        break;
      default:
        text = '💲💲💲💲💲';
    }
    return text;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={props.onSelect}>
      <Image style={styles.image} source={{uri: props.restaurant.image_url}} />
      <View style={{flex: 1, flexDirection:"row", justifyContent: 'space-between', alignContent:"center"}}>
        <Text style={styles.name}>{props.restaurant.name}</Text>
        <Text style={styles.price}>{isExpensive(prices)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {RestaurantItem};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81d4fa',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },

  image: {
    height: Dimensions.get('window').height / 3,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
  },
  price: {
    fontSize: 20,
    margin: 5,
  },
});
