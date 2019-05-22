import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

export default {
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    margin: 10,
    justifyContent: 'flex-start',
    height: screenHeight
  },
  alc_typeContainer: {
    borderRadius: 5,
    backgroundColor: "#2c4969",
    padding: 10,
    marginTop: 10,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#231f20',
    shadowOffset: { height: 4, width: 0 },
  },
  alc_typeTitle: {
    fontSize: 22,
    textTransform: "uppercase",
    color: "#ffffff",
    textAlign: "center",
    fontFamily: 'abel'
  },
  alc_catSection: {
    marginTop: 10
  }
};
