import { useNavigation } from "@react-navigation/core";
import React from "react";
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import MenuData from '../assets/data/MenuData';



Feather.loadFont();

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
      {/*Header*/}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerHome}>
            Home
          </Text>
          <Text style={styles.headerAddress}>
          Ratatie 22, 01300 Vantaa
          </Text>
          <Image source={require('../assets/images/logo.png')}
          style={styles.logo}
          />
          
         
        </View>
      </SafeAreaView>

      {/*Search*/}
      <View style={styles.searchWrapper}>
        <Feather name="search" size={16}/>
      <View style={styles.search}>
      <Text style={styles.searchText}> Search food you want</Text>
      </View>
      </View>

      {/*Title*/}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>Crowd favorites..</Text>
      </View>

      {/*Menu*/}
      <View style={styles.menuWrapper}>
        {MenuData.map(item => (
          <TouchableOpacity
          key={item.id}
          onPress={() =>
            navigation.navigate('Ordering', {
              item: item,
            })
          }>
          <View style={styles.menuItem}>
            <View>
            <Image source={item.image} style={styles.menuImage}/>
            </View>
            <View style={styles.menuText}> 
            <Text styles={styles.menuTitle}>{item.title}</Text>
            <Text styles={styles.menuPrice}>{item.price}€</Text>
            
            </View>


          </View>
          
        


          </TouchableOpacity>
        ))}
        <View>
        </View>
      </View>


      </ScrollView>
      </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  headerWrapper:{
    paddingTop:10,
    paddingLeft:5,
  },
  headerHome:{

    position:"absolute",
    left:90,
    top:'30%',
    fontWeight:"bold",

  },
    headerAddress:{

      position:"absolute",
      left:90,
      top:'50%',
  
  
    },

  logo :{
    width: 80,
    height: 90,
  },
  titleWrapper: {
    paddingTop:10,
    paddingLeft:10,
    
  },
  titleText: {
    fontWeight:"bold",
    fontSize:24,

  },
  searchWrapper:{
    flexDirection: "row",
    alignItems:"center",
    backgroundColor:"lightgrey",
    borderRadius:14,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:30,
    


  },
  search: {

  },
  searchText:{
    fontSize:17,

  },
  menuWrapper: {
    backgroundColor: "#FFF6DC",
    borderRadius:20,
    paddingHorizontal:20

  },
  menuItem: {
    flexDirection:"row",
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 10,

  },
  menuText: {
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,

  },
  menuImage :{
    width: 80,
    height: 90,
    paddingRight:60,
    borderRadius:17,
  },

  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});