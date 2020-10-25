import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

const RestaurantDetail = (props) => {
  const {selectedRestaurant} = props.route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.name}>{selectedRestaurant.name}</Text>
        <Image
          style={styles.image}
          source={{uri: selectedRestaurant.image_url}}
        />
        <View style={styles.infoContainer}>
          <Text>{selectedRestaurant.address}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text>{selectedRestaurant.area}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text>{selectedRestaurant.postal_code}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export {RestaurantDetail};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  name: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '300',
  },
  image: {
    height: Dimensions.get('window').height / 3,
  },
  infoContainer: {
    backgroundColor: "#b3e5fc",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
