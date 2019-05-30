import { Dimensions } from "react-native";

export default {
  container: {
    marginTop: 10
  },
  alc_catBtn: {
    backgroundColor: "#11212A",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    position: "absolute",
    right: 15
  },

  alc_catContainer: {
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#231f20',
    shadowOffset: { height: 2, width: 0 },
    maxHeight: 300,
    overflow:"scroll"
  },
  alc_catTitle: {
    fontSize: 20,
    textTransform: "uppercase",
    fontFamily: 'abel',
    textAlign: "center",
    color: "#ffffff",
    letterSpacing: 1,
  },
  alc_catInventory: {
    backgroundColor: "#fff"
  },
  category_item: {
    padding: 10
  },
  font: {
    fontSize: 20,
    textTransform: "uppercase",
    fontFamily: 'abel',
    textAlign: "center",
    color: "#ffffff",
    letterSpacing: 1
  }
};
