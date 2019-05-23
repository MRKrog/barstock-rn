import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

export default {
  cart_container: {
    flex: .92,
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
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: "#2c4969",
    padding: 10,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#231f20',
    shadowOffset: { height: 4, width: 0 }
  },
  cart_items: {
    height: screenHeight * 0.55,
    backgroundColor: "#ffffff",
    borderLeftColor: "#2c4969",
    borderLeftWidth: 2,
    borderRightColor: "#2c4969",
    borderRightWidth: 2
  },
  cart_header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#E8E8E8"
  },
  cart_rowOne: {
    flex: 1,
    fontSize: 13,
    fontFamily: "raleway",
    color: "#8e8e8e"
  },
  cart_rowTwo: {
    flex: 1,
    fontSize: 13,
    fontFamily: "raleway",
    color: "#8e8e8e",
    textAlign: "right"
  },
  cart_rowThree: {
    flex: 1,
    fontSize: 13,
    fontFamily: "raleway",
    color: "#8e8e8e",
    textAlign: "right",
  },
  cart_rowFour: {
    flex: 1,
    fontSize: 13,
    fontFamily: "raleway",
    color: "#8e8e8e",
    textAlign: "right"
  },
  item_info: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: "center",
    borderBottomColor: '#ececec',
    borderBottomWidth: 1,
    height: 60,
    flex: 1
  },
  item_name: {
    flex: 1,
    color: "#464646",
    fontFamily: "abel",
    fontSize: 16,
  },
  item_unit: {
    flex: 1,
    color: "#464646",
    fontFamily: "abel",
    fontSize: 16,
    textAlign: "right",
  },
  item_profit: {
    flex: 1,
    color: "#464646",
    fontFamily: "abel",
    fontSize: 16,
    textAlign: "right",
  },
  item_cost: {
    flex: 1,
    color: "#464646",
    fontFamily: "abel",
    fontSize: 16,
    textAlign: "right"
  },
  marginGreen: {
    backgroundColor: "#E1FFCF"
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    backgroundColor: "#d80707"
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
    borderBottomLeftRadius: 5,
    borderLeftColor: "#2c4969",
    borderLeftWidth: 2,
    // borderBottomColor: "#2c4969",
    // borderBottomWidth: 2,
  },
  cart_potentialText: {
    color: "#464646",
    fontFamily: 'abel',
    fontSize: 18
  },
  cart_price: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C4969",
    borderBottomRightRadius: 5,
  },
  cart_priceText: {
    color: "#ffffff",
    fontFamily: 'abel',
    fontSize: 18
  },
  cart_checkoutButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEAD0C",
    borderRadius: 5,
    marginTop: 10,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowColor: '#231f20',
    shadowOffset: { height: 4, width: 0 }
  },
  cart_checkoutText: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "#ffffff",
    textAlign: "center",
    fontFamily: 'abel'
  }
};
