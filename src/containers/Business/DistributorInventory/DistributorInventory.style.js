import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

export default {
  container: {
    display: "flex",
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    display: "flex",
    flex: 1,
    margin: 10,
  },
  alc_typeContainer: {
    borderRadius: 5,
    backgroundColor: "#2c4969",
    padding: 10,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#231f20',
    shadowOffset: { height: 4, width: 0 },
  }
};
