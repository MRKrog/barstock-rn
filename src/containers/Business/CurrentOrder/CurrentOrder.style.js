import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height
// 11212a
//161515
export default {
  cart_container: {
    flex: .92,
  },
  cart_title: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "#ffffff",
    textAlign: "center",
    fontFamily: 'abel'
    // textShadowOpacity: 0.9,
    // textShadowRadius: 3,
    // textShadowColor: '#231f20',
    // textShadowOffset: { height: 4, width: 0 }
  },
  cart_titleContainer: {
    // borderTopRightRadius: 5,
    // borderTopLeftRadius: 5,
    // backgroundColor: "#11212A",
    backgroundColor: "#2c4969",
    padding: 10,
    // borderBottomColor: "#2D2D2D",
    // borderBottomWidth: .2,

  },
  cart_items: {
    height: screenHeight * 0.55,
    // backgroundColor: "#0D191F",
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
    // backgroundColor: "#11212A",
    borderBottomColor: "#2D2D2D",
    // opacity: .8,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#231f20',
    shadowOffset: { height: 1, width: 0 },
    zIndex: 9
  },
  cart_rowOne: {
    flex: 1.5,
    fontSize: 13,
    fontFamily: "raleway",
    color: "#8e8e8e"
  },
  cart_rowTwo: {
    flex: 1,
    fontSize: 13,
    fontFamily: "raleway",
    textAlign: "center",
    color: "#8e8e8e"
  },
  cart_rowThree: {
    flex: 1,
    textAlign: "right",
    fontSize: 13,
    fontFamily: "raleway",
    color: "#8e8e8e"
  },
  cart_rowFour: {
    flex: 1,
    textAlign: "right",
    fontSize: 13,
    fontFamily: "raleway",
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
    backgroundColor: "#79B473",
    borderBottomColor: "#254D32",
    borderBottomWidth: .2,
  },
  marginYellow: {
    backgroundColor: "#FFE066",
    borderBottomColor: "#254D32",
    borderBottomWidth: .2,
  },
  marginRed: {
    backgroundColor: "#DB504A",
    borderBottomColor: "#254D32",
    borderBottomWidth: .2,
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    backgroundColor: "#D90429"
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
  },
  cart_priceText: {
    color: "#ffffff",
    fontFamily: 'abel',
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
  }
};
