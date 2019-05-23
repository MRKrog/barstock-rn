import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

export default {
  info_container: {
    flex: 1,
    margin: 10,
  },
  account_nameContainer: {
    borderRadius: 5,
    backgroundColor: "#2c4969",
    padding: 10,
    marginTop: 10,
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
    margin: 10,
    borderBottomColor: "#464646",
    borderBottomWidth: 1
  },
  info_text: {
    textDecorationLine: "underline",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "abel",
    color: "#464646"
  }
}