export default {
  category_item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    borderBottomColor: '#ececec',
    borderBottomWidth: 1,
    height: 60,
    flex: 1,
    paddingRight: 10,
    position: "relative"
  },
  item_info: {
    display: 'flex',
    flexDirection: 'row',
    flex: .65
  },
  item_image: {
    resizeMode: 'contain'
  },
  item_details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  item_name: {
    color: "#11212a",
    fontFamily: "Lato",
    fontSize: 17,
  },
  item_price: {
    color: "#11212a",
    fontFamily: "Lato-Light",
    fontSize: 15
  },
  item_action: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: "#ececec",
    height: 40
  },
  quantityContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontFamily: "abel",
    fontSize: 25,
    marginRight: 10,
    marginLeft: 10,
    color: "#11212a",
    width: 25,
    textAlign: "center",
  },
  btnMinus: {
    backgroundColor: "#0098de",
    borderRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  btnPlus: {
    backgroundColor: "#0098de",
    borderRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  editBtn: {
    backgroundColor: "#0098de",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,

  },
  quantityText: {
    color: "#adadad",
    fontFamily: "raleway",
    fontSize: 10,
    textAlign: "center"
  },
  textvalid: {
    opacity: 1
  },
  textinvalid: {
    opacity: .3
  },
  item_addBtn: {
    backgroundColor: "#0098de",
    borderRadius: 2,
    padding: 10
  },
  item_addText: {
    fontSize: 20,
    color: "#ffffff",
    fontFamily: "raleway",
  },
  alc_toggle: {
    color: "#ffffff",
    fontSize: 30,
    lineHeight: 27
  }
};
