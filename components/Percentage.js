import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

class Percentage extends Component{
    render(){
        const { score, counter, reset, goBack } = this.props

        return  (
            <View style={styles.container}>
                <Text style={styles.textQues}>Total Accuracy Percentage:</Text>
                <Text style={styles.textAns}>{Math.floor((score/counter)*100)}%</Text>
                <TouchableOpacity style={styles.buttonCorrect} onPress={reset}>
                    <Text style={styles.textbtn}>
                        Restart
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonCorrect, {backgroundColor: 'green'}]} onPress={goBack}>
                    <Text style={styles.textbtn}>
                        Back To Deck
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        alignItems: 'center'
    },
     textQues:{
        fontSize:50,
        fontWeight:'bold',
        color:'#00b894',
        textAlign:'center'
    },
    textAns:{
        fontSize:40,
        fontWeight:'bold',
        color:'#ff3f34',
        textAlign:'center',
        marginTop:30
    },
     textbtn:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        fontFamily:'',
    },
      buttonCorrect: {
      padding: 20,
      borderRadius:20,
      width:200,
      backgroundColor:'#872805',
      marginTop:30,
   },

})
export default Percentage
