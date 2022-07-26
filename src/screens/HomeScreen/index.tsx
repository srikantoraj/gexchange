import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
export default function HomeScreen() {
  return (
    <View style={styles.container} >
        <Image style={styles.image} source={require('../../../assets/images/Saly-1.png')}/>
      <Text style={styles.title}>Welcome to GLDC</Text>
      <Text style={styles.subtitle}>Invest your virtual $100,000 dollar and compete with others</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        alignItems:'center',
    },
    image:{
        height:'52%',
        aspectRatio:1,
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        marginTop:45,
        marginBottom:15,

    },
    subtitle:{
   fontSize:20,
   textAlign:'center',
   color:'#707070',
    },
})