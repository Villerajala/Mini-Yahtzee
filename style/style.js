import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  
  header: {
    marginBottom: 30,
    backgroundColor: 'black',
    flexDirection: 'row',
  },

  footer: {
    marginTop: 60,
    backgroundColor: 'black',
    flexDirection: 'row',
  },

  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },

  author: {
    color: '#fff',
    fontWeight: 'normal',
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    margin: 20,

  },
  gameboard: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },

  row: {
    marginTop: 30,
    padding: 20
  },

  flex: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    margin: 30,
    flexDirection: "row",
    padding: 25,
    backgroundColor: "black",
    width: 150,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 100,
  },

  buttonText: {
    color:"red",
    fontSize: 20,
  },
});