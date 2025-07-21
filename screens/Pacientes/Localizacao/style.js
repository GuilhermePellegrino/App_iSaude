import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 15, 
    backgroundColor: "#fff",
    alignItems: "flex-start"
},
  title: { 
    fontSize: 22, 
    fontWeight: "bold", 
    marginBottom: 10, 
    marginTop:190,
    color: "#2563eb", 
    textAlign: "center"
},
  desc: { 
    fontSize: 14, 
    color: "#444", 
    marginBottom: 10,
},
  btn: { 
    backgroundColor: "#2563eb", 
    borderRadius: 8, 
    paddingVertical: 16, 
    paddingHorizontal: 40, 
    marginBottom: 14,
},
  btnText: { 
    color: "#fff", 
    fontWeight: "bold", 
    fontSize: 16,
},
  link: { 
    color: "#2563eb",
    fontSize: 15,
    textDecorationLine:'underline'
},
  localizacio:{
    marginTop:50,
    color:"#000000",
    fontSize:15,
    fontWeight:"bold",
},
header:{
    marginTop:50,
    marginBottom:16,
    alignItems: "flex-start",
    marginLeft:15,
},
formButton:{                 // faz ocupar todo o espaço possível
  justifyContent: "center", // centraliza verticalmente
  alignItems: "center",     // centraliza horizontalmente
  backgroundColor:"#ff043",
  margin:"auto",
  marginBottom:100,
},
formImage:{
    marginTop:50,
},
});

export default styles