import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

export default {
  conatiner: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between"
  },
  info_container: {
    display: "flex"
  },
  account_nameContainer: {
    backgroundColor: "#2c4969",
    padding: 10,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#231f20',
    shadowOffset: { height: 4, width: 0 },
  },
  account_name: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "#ffffff",
    textAlign: "center",
    fontFamily: 'abel'
  },
  info_TextContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#231f20',
    shadowOffset: { height: 4, width: 0 },
  },
  info_section: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
    borderBottomColor: "#464646",
    borderBottomWidth: 1
  },
  info_text: {
    margin: 5,
    fontSize: 20,
    fontFamily: "Lato-Light",
    color: "#464646",
    paddingBottom: 5
  },
  info_title: {
    margin: 5,
    fontSize: 20,
    fontFamily: "Lato-Regular",
    color: "#464646",
    paddingBottom: 5,
    textDecorationLine: "underline"
  }
}
