import React,{useState} from 'react';
import { View,Text,StyleSheet, TouchableOpacity, FlatList,Image} from 'react-native';
// import bgImg from '../../assets/angryimg.png';
import Transaction from '../components/Transaction';
import BottomNav from '../components/BottomNav';
import Icon from 'react-native-vector-icons/Fontisto';
import walletImg from '../../assets/bitcoinwallet.jpg';
const transactionList=[
    {txid:'234134', amount:100, currency:'USD', type:'Sell',time:'02:00pm',date:'03/01/2022'},
    {txid:'456456', amount:100, currency:'USD', type:'Buy',time:'02:00pm',date:'03/01/2022'},
    {txid:'23423432', amount:5002, currency:'USD', type:'Sell',time:'02:00pm',date:'03/01/2022'},
    {txid:'2342344', amount:90, currency:'USD', type:'Buy',time:'02:00pm',date:'03/01/2022'},
    {txid:'6445534', amount:234, currency:'INR', type:'Sell',time:'02:00pm',date:'03/01/2022'},
    {txid:'2343455', amount:57, currency:'USD', type:'Sell',time:'02:00pm',date:'03/01/2022'},
    {txid:'0975443', amount:98, currency:'USD', type:'Buy',time:'02:00pm',date:'03/01/2022'},
    {txid:'6335345', amount:264, currency:'USD', type:'Sell',time:'02:00pm',date:'03/01/2022'},
    {txid:'6786544', amount:444, currency:'SGD', type:'Sell',time:'02:00pm',date:'03/01/2022'},
    {txid:'3432423', amount:166, currency:'USD', type:'Buy',time:'02:00pm',date:'03/01/2022'},
]
const Dashboard=({navigation})=>{
    const [connectWallet,setConnectWallet]=useState(false);
    return(
        <View style={styles.container}>
                {/* <Image style= { styles.backgroundImage } source={bgImg}>
                </Image> */}
            <View style={styles.amountContainer}>
           {connectWallet?<View style={{flexDirection:'column', justifyContent:'space-around', alignItems:'center'}}> 
                                    <Text style={styles.wallet}>Wallet Balance <Icon name="wallet" size={15} color="#fff" /></Text>
                               
                                  <Text style={styles.walletAmt}>$100</Text>
                                <Text style={{color:'#26ff40'}}>Wallet connected Successfully!</Text>
                        </View>:<TouchableOpacity onPress={()=>setConnectWallet(true)}>
                    <Text style={styles.textStyle}>Connect Wallet</Text>
                </TouchableOpacity>}
                
            </View>
            <View style={styles.viewBG}>
            {connectWallet?<Text style={{marginLeft:20, fontSize:20, marginTop:15, fontWeight:'bold'}}>Transactions</Text>:null}
            {connectWallet?<FlatList 
                    style={styles.flatList}
                    keyExtractor={(transaction)=> transaction.txid}
                    data={transactionList} 
                    renderItem={({item})=>{
                        return <Transaction id={item.txid} amount={item.amount} currency={item.currency} type={item.type} time={item.time} date={item.date}/>
                    }}
                />:<View>
                <Image style={{width:'90%',height:300, alignSelf:'center',marginTop:20,borderRadius:10}} source={walletImg}></Image>
                <Text style={{alignSelf:'center',margin:20,fontSize:30}}>Connect Wallet to get Transactions</Text></View>}
               
            </View>
           
            
            <BottomNav navigation={navigation}/>
        </View>
    )
};

const styles=StyleSheet.create({
    
    container:{
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection:'column',
        paddingBottom:65,
        backgroundColor:'#0045b5'
    },
    flatList:{
        // alignSelf:'center',
        marginTop:10
    },
    viewBG:{
        flex:1,
        backgroundColor:'#d9ecff',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    wallet:{
        color:'white',
        textAlign:'center',
        opacity:0.9
    },
    walletAmt:{
        color:'white',
        fontSize:30,
        paddingTop:5,
        textAlign:'center',
        alignSelf:'center'
    },
    amountContainer:{
        minHeight:100,
        padding:10,
        textAlign:'center',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    // backgroundImage:{
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     bottom: 0,
    //     right: 0,
    //     width:'100%',
    //     height:100
    // },
    textStyle:{
        textAlign:'center',
        backgroundColor:'white',
        width:200,
        padding:15,
        borderRadius:5
    },
    gen:{
        marginRight:10,
        padding:10,
    }
});

export default Dashboard;