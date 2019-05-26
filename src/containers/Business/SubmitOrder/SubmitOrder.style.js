import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

export default {
  backgroundImage: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'space-between'
  },
  submit_container: {
    display: "flex",
  },
  cart_titleContainer: {
    backgroundColor: "#2c4969",
    padding: 10,
  },
  cart_title: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "#ffffff",
    textAlign: "center",
    fontFamily: 'abel'
  },
  cart_items: {
    height: screenHeight * 0.6,
    backgroundColor: "#ffffff"
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
  item_cost: {
    flex: 1,
    color: "#50514F",
    fontFamily: 'Lato-Light',
    fontSize: 15,
    textAlign: "right"
  },
  cart_priceContainer: {
    flexDirection: "row",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#231f20',
    shadowOffset: { height: 3, width: 0 },
    zIndex: 9
  },
  cart_price: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C4969",
  },
  cart_priceText: {
    color: "#ffffff",
    fontFamily: 'abel',
    fontSize: 20,
    padding: 10,
  },
  submitBtn_container: {
    display: 'flex',
    flexDirection: 'row',
  },
  cart_backButton: {
    display: "flex",
    flexDirection: "row",
    flex: .5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEAD0C",
    borderRadius: 5,
    marginVertical: 20,
    marginLeft: 15,
    // marginHorizontal: 15,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: '#fffff',
    shadowOffset: { height: 1, width: 0 }
  },
  cart_checkoutButton: {
    display: "flex",
    flexDirection: "row",
    flex: .5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEAD0C",
    borderRadius: 5,
    marginVertical: 20,
    marginRight: 15,
    marginLeft: 15,
    // marginHorizontal: 15,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: '#fffff',
    shadowOffset: { height: 1, width: 0 }
  },
  cart_checkoutText: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "#ffffff",
    fontFamily: 'abel',
    paddingVertical: 10,
  }
};
