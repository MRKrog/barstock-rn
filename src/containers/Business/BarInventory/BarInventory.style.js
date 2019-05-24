import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

export default {
  bar_invContainer: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flex: 0.9,
    margin: 10,
    backgroundColor: "#ffffff"
  },
  bar_titleContainer: {
    borderRadius: 5,
    backgroundColor: "#2c4969",
    padding: 10,
    marginTop: 10,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#231f20',
    shadowOffset: { height: 4, width: 0 },
  },
  bar_title: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "#ffffff",
    textAlign: "center",
    fontFamily: 'abel'
  },
  item_card: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    height: 50,
  },
  item_info: {
    flex: 2,
    display: 'flex',
    flexDirection: 'row',
  },
  item_image: {
    marginRight: 10,
    resizeMode: 'contain'
  },
  item_details: {
    display: "flex",
    flexDirection: "column"
  },
  item_name: {
    color: "#11212a",
    fontFamily: "lato",
    fontWeight: "100",
    fontSize: 16,
    paddingBottom: 3
  },
  item_price: {
    color: "#adadad",
    fontFamily: "raleway",
    fontStyle: "italic",
    fontWeight: "100",
    fontSize: 15
  },
  item_action: {
    display: 'flex',
    flexDirection: 'column'
  },
  item_margins: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  item_stock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  bar_itemsHeader: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#E8E8E8"
  },
  items_rowOne: {
    flex: 2,
    textAlign: "center",
    fontSize: 13,
    fontFamily: "raleway",
    color: "#8e8e8e"
  },
  items_rowTwo: {
    flex: 1,
    textAlign: "center",
    fontSize: 13,
    fontFamily: "raleway",
    color: "#8e8e8e"
  },
  items_rowThree: {
    flex: 1,
    textAlign: "center",
    fontSize: 13,
    fontFamily: "raleway",
    color: "#8e8e8e"
  }
}