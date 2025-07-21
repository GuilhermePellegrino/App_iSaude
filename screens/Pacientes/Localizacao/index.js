import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from './style';

export default function LocalizacaoScreen() {
  return (
    <View style={{flex: 1, backgroundColor: "#fff"}}>

      <View style={styles.header}>
        <Text style={styles.localizacio}>Localização em tempo real</Text>
      </View>
 
    <View style={styles.formImage}>
        <Image source ={require('./localizacao.png')}/>
    </View>

      <View style={styles.container}>
        
        <View style={styles.formButton}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Permitir</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Deixar para depois!</Text>
        </TouchableOpacity>
        </View>

      </View>

    </View>
  );
}