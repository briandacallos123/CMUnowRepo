import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const SocialIcon = ({settingAdmin}) => {

    const adminTrue = () => {
        settingAdmin()
    }
    return (
        <View style={{
            flexDirection:'row',
            justifyContent:'center',
            position:'relative',
            bottom:-15
        }}>
            <View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Entypo name="facebook" size={20} color="#02215A" style={{marginRight:0}}/>
                        <Text style={{fontSize:12}}> @CityofMalabonUniversity</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <AntDesign name="copyright" size={20} color="black" style={{marginRight:1}}/>
                    <Text style={{fontSize:12}}>Copyrights from City of Malabon University</Text>
                </View>
            </View>
            <View style={styles.right}>
                <MaterialIcons onPress={adminTrue} name="admin-panel-settings" size={30} color="#02215A" />
            </View> 
        </View>
    )
}

export default SocialIcon

const styles = StyleSheet.create({
    right:{
       
        alignItems:'center',
        justifyContent:'center'
    }
})
