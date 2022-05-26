import React from 'react';
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
const BottomNav=({navigation})=>{
    return(
        <View style={styles.bottomNav}>
       <TouchableOpacity onPress={()=>navigation.navigate('Buy')} style={styles.buttons}>
       <Icon name="money" size={20} color="#fff" />
           <Text style={styles.buttonText}>Buy</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>navigation.navigate('Sell')} style={styles.buttons}>
       <MatIcon name="attach-money" size={20} color="#fff" />
           <Text style={styles.buttonText}>Sell</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>navigation.navigate('Swap')} style={styles.buttons}>
       <Icons name="bank-transfer" size={20} color="#fff" />
           <Text style={styles.buttonText}>Swap</Text>
       </TouchableOpacity>
            
        </View>
    )
};

const styles=StyleSheet.create({
    bottomNav:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        backgroundColor:'#0045b5',
        padding:10,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    buttons:{
        padding:10,
        // borderRightWidth:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    buttonText:{
        marginLeft:5,
        fontSize:15,
        color:'white'
    }
});

export default BottomNav;