import React, {Component} from 'react';
import { View , Text, Image} from 'react-native';
import detailsStyles from '../../styles/detailsstyles';
import { TextInput } from 'react-native-gesture-handler';
export class DetailsComponent extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <View style={detailsStyles.viewContainer}>
                    <Text>
                        <Image source={require('../../assets/arrow-left.png')} style={{width: 50, height: 50}}></Image>
                    </Text>
                    <Text style={detailsStyles.headerTitle}>Details</Text>
                    <Text style={detailsStyles.subTitle}>Tempor minim id consequat commodo exercitation cupidatat Lorem ad.</Text>
                </View>
                <View style={detailsStyles.personalDetails}>
                    <Text style={detailsStyles.pdHeader}>Perosnal Info</Text>
                    <TextInput placeholder="Mobile number"></TextInput>
                </View>
            </View>
        )
    }
}