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
    // shadowOffset: { height: 4, width: 0 },
  },
  info_section: {
    display: "flex",
    flexDirection: "column",
  },
  info_text: {
    fontSize: 17,
    fontFamily: "Lato-Light",
    color: "#464646",
    paddingBottom: 10,
    marginLeft: 10
  },
  info_title: {
    paddingVertical: 5,
    paddingLeft: 10,
    marginBottom: 5,
    fontSize: 18,
    fontFamily: "Lato-Regular",
    color: "#8e8e8e",
    backgroundColor: "#E8E8E8"
  }
}
