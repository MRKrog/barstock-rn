import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default {
  MainDisplay: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
}