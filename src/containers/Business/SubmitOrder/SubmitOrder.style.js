import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

export default {
  backgroundImage: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    width: screenWidth,
    height: screenHeight,
    resizeMode: 'contain',
    alignItems: 'flex-start',

  },
  submit_container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    margin: 10
  },
  cart_titleContainer: {
    padding: 5,
  },
  cart_title: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "#8e8e8e",
    textAlign: "center",
    fontFamily: 'abel',
  },
  cart_items: {
    height: screenHeight * 0.6,
    backgroundColor: "#ffffff"
  },
  cart_header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#2c4969",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  cart_rowOne: {
    fontSize: 15,
    fontFamily: "raleway",
    color: "#ffffff"
  },
  cart_rowTwo: {
    fontSize: 15,
    fontFamily: "raleway",
    color: "#ffffff"
  },
  cart_rowThree: {
    fontSize: 15,
    fontFamily: "raleway",
    color: "#ffffff"
  },
  item_info: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: "center",
    borderBottomColor: '#ececec',
    borderBottomWidth: 1,
    height: 60
  },
  item_name: {
    color: "#464646",
    fontFamily: "Lato-Light",
    fontSize: 18,
    fontWeight: "100",
    borderRightColor: '#000',
    borderRightWidth: 1,
    flex: 1
  },
  item_unit: {
    color: "#464646",
    fontFamily: "Lato-Light",
    fontSize: 18,
    display: "flex",
    textAlign: "center",
    flex: 1
  },
  item_cost: {
    color: "#464646",
    fontFamily: "Lato-Light",
    fontSize: 18,
    flex: 1,
    textAlign: "right",
  },


  cart_priceContainer: {
    display: "flex",
    flexDirection: "row"
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
    fontSize: 22,
    padding: 10,
  },
  cart_backButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEAD0C",
    borderBottomLeftRadius: 5,
    borderRightColor: '#ffffff',
    borderRightWidth: 2,
  },
  cart_checkoutButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEAD0C",
    borderBottomRightRadius: 5,
    paddingVertical: 10
  },
  cart_checkoutText: {
    fontSize: 20,
    textTransform: "uppercase",
    color: "#ffffff",
    textAlign: "center",
    fontFamily: 'abel'
  },
  submitBtn_container: {
    display: 'flex',
    flexDirection: 'row',
  }


};
