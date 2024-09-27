import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

export default function LoginScreen() {
  return (
    <View 
    style={{
        backgroundColor:Colors.WHITE,
        height:500
    }}
    >

        <Image source={require('../../assets/images/login.png')}
        style={{
            width:'100%',
            height:500
        }}
        />
        <View
        style={{
            padding:20,
            display:'flex',
            alignItems:'center'
        }}
        >
            <Text
            style={{
                fontFamily:'Outfit-bold',
                textAlign:'center',
                fontSize:30
            }}
            >Ready to make a new friend?</Text>

            <Text 
            style={{
                display:'flex',
                textAlign:'center',
                fontSize:18,
                color:Colors.GRAY,
                fontFamily:'Outfit',

            }}
            >Let's adopt the pet which you like
            and make there life happy again</Text>
            <Pressable 
            style={{
                padding:14,
                marginTop:100,
                backgroundColor:Colors.PRIMARY,
                borderRadius:14,
                width:'100%'
            }}
            >
                <Text 
                style={{
                    textAlign:'center',
                    fontSize:20,
                    fontFamily:'Outfit-Medium'
                }}
                >Get Started</Text>
            </Pressable>
        </View>
    </View>
  )
}