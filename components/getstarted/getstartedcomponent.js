import React, { Component } from 'react';
import { Text, ImageBackground, Image, View, TouchableHighlight } from 'react-native';
import mainBg from '../../assets/main_bg.png';
import Logo from '../../assets/logo.png';
import globalStyles from '../../styles/globalstyles';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class GetStartedComponent extends Component {
    constructor(props){
        super(props);
        this.signInWithLink = this.signInWithLink.bind(this)
    }
    signInWithLink(){
        this.props.navigation.push('/details')
    }
    signInWithGoogle(){
        alert('Selected google');
    }
    render(){
        return(
            <ImageBackground source={mainBg} style={globalStyles.logoImg} >
                <View style={globalStyles.mainContainer}>
                    <View>
                        <Image source={Logo} style={{width: 180, height: 150}}></Image>
                    </View>
                    <View>
                        <Text style={globalStyles.header}>ROCKET CREDIT</Text>
                    </View>
                    <View>
                        <TouchableHighlight onPress={this.signInWithLink}>
                            <Text style={globalStyles.blueBtn}>
                                <Icon name="linkedin" size={20} color="#fff" style={{marginRight:15, alignItems: 'center', justifyContent: 'center'}}/>
                                Signin with Linkedin
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableHighlight onPress={this.signInWithGoogle}>
                            <Text style={globalStyles.blueBtn && globalStyles.whiteBg}>
                                <Icon name="google" size={18} color="#1976D2" style={{marginRight:15, alignItems: 'center', justifyContent: 'center'}} />
                                Sign in with Google
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}