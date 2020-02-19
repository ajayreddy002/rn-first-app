import React, { Component } from 'react';
import { Text, ImageBackground, Image, View, Button } from 'react-native';
import mainBg from '../../assets/main_bg.png';
import Logo from '../../assets/logo.png';
import globalStyles from '../../styles/globalstyles';
import Icon from 'react-native-vector-icons/FontAwesome5'
export default class GetStartedComponent extends Component {
    render(){
        return(
            <ImageBackground source={mainBg} style={{width: '100%', height: '100%', flex: 1}} 
            imageStyle={{resizeMode: 'cover'}}>
                <View style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                    <Text style={{width: '180px', height: '150px', marginTop: -50}}>
                        <Image source={Logo} style={{width: '100%', height: '100%'}}></Image>
                    </Text>
                    <View>
                        <Text style={globalStyles.header}>ROCKET CREDIT</Text>
                    </View>
                    <View style={{margin: 0}}>
                        <Text style={globalStyles.blueBtn}>
                            <Icon name="linkedin" size={20} color="#fff" style={{marginRight:15, alignItems: 'center', justifyContent: 'center'}}/>
                            Signin with Linkedin
                        </Text>
                    </View>
                    <View style={{margin: 0}}>
                        <Text style={globalStyles.blueBtn && globalStyles.whiteBg}>
                            <Icon name="google" size={18} color="#1976D2" style={{marginRight:15, alignItems: 'center', justifyContent: 'center'}} />
                            Sign in with Google
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}