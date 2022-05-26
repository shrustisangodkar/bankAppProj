import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Transaction=({id,date,time,amount,currency,type})=>{
    return(
        <View style={styles.transaction}>
            <View style={styles.topLevel}>
                <Text style={styles.txid}>Tx ID: {id}</Text> 
                <Text style={styles.datetime}>Date/Time: {date} - {time}</Text> 
            </View>
            {/* <View style={styles.midLevel}>
                <Text>Date/Time: {date} - {time}</Text> 
            </View> */}
            <View style={styles.bottomLevel}>
                <Text style={styles.amount}>Amount: <Text style={styles.amountVal}>{amount}</Text></Text> 
                <Text style={styles.amount}>Currency: <Text style={styles.currencyVal}>{currency}</Text></Text> 
                
                <Text style={styles.amount}>Type: <Text style={styles.typeVal}>{type == 'Buy' || type =='buy' || type=='BUY' ? <Text style={{color:'green'}}>{type}</Text>:<Text style={{color:'red'}}>{type}</Text>}</Text></Text>
            </View>
        </View> 
    )
};

const styles=StyleSheet.create({
    transaction:{
        padding:12,
        borderRadius:5,
        // borderWidth:1,
        // borderColor:'#a3a3a3',
        backgroundColor:'white',
        width:'90%',
        marginBottom:10,
        alignSelf:'center',
        flexDirection:'row'
    },
    txid:{
        fontWeight:'bold',
        fontSize:15
    },
    datetime:{
        fontSize:10
    },
    topLevel:{
        flexDirection:'column',
        justifyContent:'center'
    },
    midLevel:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:5
    },
    bottomLevel:{
        flexDirection:'column',
        justifyContent:'center',
        marginBottom:5,
        marginLeft:20,
    },
    amount:{
        fontSize:14,
        fontWeight:'bold',
    },
    amountVal:{
        fontWeight:'normal',
        marginLeft:15,
        textAlign:'right',
    },
    currencyVal:{
        fontWeight:'normal',
        marginLeft:15
    },
    typeVal:{
        fontWeight:'normal',
        marginLeft:15
    },
});

export default Transaction;