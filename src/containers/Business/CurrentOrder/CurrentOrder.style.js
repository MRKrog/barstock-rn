import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

export default {
  cart_container: {
    flex: 0.90,
    margin: 10,
  },
  cart_title: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "#ffffff",
    textAlign: "center",
    fontFamily: 'abel'
  },
  cart_titleContainer: {
    borderRadius: 5,
    backgroundColor: "#2c4969",
    padding: 10,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#231f20',
    shadowOffset: { height: 4, width: 0 },
  },
  cart_items: {
    height: screenHeight * 0.55,
    backgroundColor: "#ffffff"
  },
  cart_priceContainer: {
    flex: 1,
    flexDirection: "row"
  },
  cart_potential: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
    borderRadius: 5,
  },
  cart_potentialText: {
    color: "#464646",
    fontFamily: 'abel',
    fontSize: 20
  },
  cart_price: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C4969",
    borderRadius: 5,
  },
  cart_priceText: {
    color: "#ffffff",
    fontFamily: 'abel',
    fontSize: 20
  },
  cart_checkoutButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEAD0C",
    borderRadius: 5,
    marginTop: 5,
  },
  cart_checkoutText: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "#ffffff",
    textAlign: "center",
    fontFamily: 'abel'
  }
};