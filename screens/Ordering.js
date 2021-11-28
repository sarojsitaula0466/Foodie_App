import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
  TouchableOpacityBase,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Ordering = ({ route, navigation }) => {
  const { item } = route.params;

  {
    /*Toogle switches */
  }

  const [ketchup, setKetchup] = React.useState(false);
  const [mustard, setMustard] = React.useState(false);
  const [mayonnaise, setMayonnaise] = React.useState(false);
  const [lettuce, setLettuce] = React.useState(false);
  const [pickle, setPickle] = React.useState(false);
  const [tomato, setTomato] = React.useState(false);
  const [cheese, setCheese] = React.useState(false);
  const [counter, setCounter] = React.useState(1);

  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* Header*/}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.headerLeft}>
                <Feather name="chevron-left" size={22} />
              </View>
            </TouchableOpacity>
            <View style={styles.headerMiddle}>
              <Text style={styles.headerTitle}>{item.title}</Text>
            </View>
            <View style={styles.headerRight}>
              <MaterialCommunityIcons
                name="heart"
                size={30}
                color={"#2FBD00"}
              />
            </View>
          </View>
        </SafeAreaView>
        {/* Image */}
        <View style={styles.Image}>
          <Image
            source={require("../assets/images/cheeseburger.png")}
            style={styles.burger}
          />
        </View>
        {/*Add on */}
        <View style={styles.addonWrapper}>
          <View style={styles.addonInfo}>
            <Text style={styles.addonTitle}>Ketchup</Text>
            <Text style={styles.addonTitle}>Mustard</Text>
            <Text style={styles.addonTitle}>Mayonnaise</Text>
            <Text style={styles.addonTitle}>Lettuce</Text>
            <Text style={styles.addonTitle}>Pickle</Text>
            <Text style={styles.addonTitle}>Tomato</Text>
            <Text style={styles.addonTitle}>Cheese</Text>
          </View>
          <View style={styles.toggleButton}>
            <Switch
              value={ketchup}
              onValueChange={(value) => setKetchup(value)}
              trackColor={{ true: "#81693F" }}
            />
            <Switch
              value={mustard}
              onValueChange={(value) => setMustard(value)}
              trackColor={{ true: "#81693F" }}
            />
            <Switch
              value={mayonnaise}
              onValueChange={(value) => setMayonnaise(value)}
              trackColor={{ true: "#81693F" }}
            />
            <Switch
              value={lettuce}
              onValueChange={(value) => setLettuce(value)}
              trackColor={{ true: "#81693F" }}
            />
            <Switch
              value={pickle}
              onValueChange={(value) => setPickle(value)}
              trackColor={{ true: "#81693F" }}
            />
            <Switch
              value={tomato}
              onValueChange={(value) => setTomato(value)}
              trackColor={{ true: "#81693F" }}
            />
            <Switch
              value={cheese}
              onValueChange={(value) => setCheese(value)}
              trackColor={{ true: "#81693F" }}
            />
          </View>
        </View>
        {/*Quantity*/}
        <View style={styles.quantityWrapper}>
          <TouchableOpacity style={styles.quantityMinus}>
            <Text onPress={() => setCounter(counter - 1)}>-</Text>
          </TouchableOpacity>
          <View style={styles.quantityNumber}>
            <Text>{counter}</Text>
          </View>
          <TouchableOpacity style={styles.quantityPlus}>
            <Text onPress={() => setCounter(counter + 1)}>+</Text>
          </TouchableOpacity>
        </View>
        {/*Add to cart */}
        <TouchableOpacity
          onPress={() => alert("Your order has been added to your cart!")}
        >
          <View style={styles.cartWrapper}>
            <Text style={styles.cartText}>Add to cart</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    color: "black",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  burger: {
    width: 300,
    height: 225,
    paddingTop: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 50,
  },
  Image: {
    justifyContent: "center",
    alignItems: "center",
  },
  addonWrapper: {
    flexDirection: "row",
    backgroundColor: "#FFF6DC",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 10,
    justifyContent: "space-between",
  },
  addonTitle: {
    justifyContent: "space-between",
    margin: 15,
    fontSize: 15,
    fontWeight: "500",
  },
  toggleButton: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
    margin: 10,
  },
  quantityWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityMinus: {
    width: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 20,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  quantityNumber: {
    width: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 20,
  },
  quantityPlus: {
    width: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 20,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  cartWrapper: {
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#F59F0A",
    borderRadius: 50,
    paddingVertical: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cartText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Ordering;
