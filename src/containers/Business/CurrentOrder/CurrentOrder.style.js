import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height
// 11212a
//161515
export default {
  cart_container: {
    display: "flex",
    flex: 1,
    justifyContent: 'space-between'
  },
  cart_title: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "#ffffff",
    textAlign: "center",
    fontFamily: 'abel'
  },
  cart_titleContainer: {
    backgroundColor: "#2c4969",
    padding: 10,
  },
  cart_items: {
    height: screenHeight * 0.57,
    backgroundColor: "#ffffff",
  },
  cart_header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#E8E8E8",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomColor: "#2D2D2D",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#231f20',
    shadowOffset: { height: 1, width: 0 },
    zIndex: 9
  },
  cart_rowOne: {
    flex: 1.5,
    fontSize: 13,
    fontFamily: 'Lato-Light',
    color: "#8e8e8e"
  },
  cart_rowTwo: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'Lato-Light',
    textAlign: "center",
    color: "#8e8e8e"
  },
  cart_rowThree: {
    flex: 1,
    textAlign: "right",
    fontSize: 13,
    fontFamily: 'Lato-Light',
    color: "#8e8e8e"
  },
  cart_rowFour: {
    flex: 1,
    textAlign: "right",
    fontSize: 13,
    fontFamily: 'Lato-Light',
    color: "#8e8e8e"
  },
  item_info: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: "center",
    borderBottomColor: '#ececec',
    borderBottomWidth: 1,
    height: 50,
    flex: 1
  },
  item_name: {
    flex: 1.5,
    color: "#50514F",
    fontFamily: 'Lato-Light',
    fontSize: 15,
  },
  item_unit: {
    flex: 1,
    color: "#50514F",
    fontFamily: 'Lato-Light',
    fontSize: 15,
    textAlign: "center",
  },
  item_profit: {
    flex: 1,
    color: "#50514F",
    fontFamily: 'Lato-Light',
    fontSize: 15,
    textAlign: "right",
  },
  item_cost: {
    flex: 1,
    color: "#50514F",
    fontFamily: 'Lato-Light',
    fontSize: 15,
    textAlign: "right"
  },
  marginGreen: {
    backgroundColor: "#B9D7B5",
    borderBottomColor: "#254D32",
    borderBottomWidth: .2,
  },
  marginYellow: {
    backgroundColor: "#FFEB9D",
    borderBottomColor: "#FFE066",
    borderBottomWidth: .2,
  },
  marginRed: {
    backgroundColor: "#EC6F78",
    borderBottomColor: "#254D32",
    borderBottomWidth: .2,
  },
  cart_priceContainer: {
    flex: 1,
    flexDirection: "row",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#231f20',
    shadowOffset: { height: 3, width: 0 },
    zIndex: 9,
  },
  cart_potential: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c4969",
  },
  cart_potentialText: {
    color: "#ffffff",
    fontFamily: 'Lato-Light',
    fontSize: 18
  },
  cart_price: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
  },
  cart_priceText: {
    color: "#696969",
    fontFamily: 'Lato-Light',
    fontSize: 18
  },
  cart_checkoutButton: {
    display: "flex",
    flexDirection: "row",
    flex: .8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEAD0C",
    borderRadius: 5,
    marginVertical: 15,
    marginHorizontal: 15,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: '#fffff',
    shadowOffset: { height: 1, width: 0 }
  },
  cart_checkoutText: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "#ffffff",
    fontFamily: 'abel'
  },
  textvalid: {
    opacity: 1
  },
  textinvalid: {
    opacity: .5
  }
};
