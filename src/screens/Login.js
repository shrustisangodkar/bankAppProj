import React,{useState} from 'react';
import { StyleSheet,View,Text,TextInput,Button,Image,TouchableOpacity} from 'react-native';
import MoneyImg from '../../assets/money.png';
import Transaction from '../components/Transaction';
const Login=({navigation})=>{
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError]=useState(false);
    const login=()=>{
        if(email == '' || email== '' && password == ''){
            console.log('Logged In!');
            setError(false);
            navigation.navigate('Dashboard');
        }else{
            console.log('Log in failed!');
            setError(true);
        }
    }
    return(
        <View style={styles.container}>
        
        <View >
        <Image style={styles.moneyImg} source={MoneyImg}/>
            <View style={styles.formArea}>
            <Text style={styles.heading}>Login Page</Text>
            {error?<Text style={styles.errorMessage}>Incorrect username or password</Text>:null}
            <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
            />
            </View>
            
            <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
            </View>
            <TouchableOpacity onPress={()=>login()} style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#d9ecff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column'
    },
    topRow:{
        flex:1,
        backgroundColor:'blue'
    },
    bottomRow:{
        flex:1,
        backgroundColor:'white'
    },
  heading:{
      fontSize:20,
      marginBottom:10,
      textAlign:'center'
  },
    moneyImg:{
        width:310,
        height:310
    },
    formArea:{
        padding:40,
        position:'relative',
        backgroundColor:'white',
        borderRadius:10,
        marginBottom:60
    },
    inputView: {
        backgroundColor: "#fff",
        width: "100%",
        height: 45,
        marginBottom: 10,
        marginTop: 10,
        alignItems: "center",
        borderBottomWidth:1,
        borderBottomColor:"#525252"
      },
      
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        width:'100%'
      },
      loginBtn:
        {
        width:'100%',
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#0057ad",
        },
        loginText:{
            color:'#fff',
            fontWeight:'bold'
        },
        errorMessage:{
            color:'#a30021'
        }
});

export default Login;