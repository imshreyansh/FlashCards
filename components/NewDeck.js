import React,{Component} from 'react'
import {View,
        Text,
        StyleSheet,
        TextInput,
        TouchableOpacity,
        KeyboardAvoidingView}
        from 'react-native'
import {connect} from 'react-redux'
import {getDeckTitle} from '../actions'
import {saveDeckTitle} from '../utils/AsyncStorage'


class NewDeck extends Component {
state={
    Input:'',
    }

submit(){
    const { Input } = this.state
    const {dispatch}= this.props

    if (Input.trim()) {
        saveDeckTitle(Input)
        .then(()=> dispatch(getDeckTitle(Input)))
        this.setState({
            Input:''
        })

        this.props.navigation.goBack()
    } else {
        alert('Field is empty!')
    }


}

render() {
    return (

        <KeyboardAvoidingView style={styles.container} behavior='padding' >

            <Text style={styles.text}>What Is The Title Of Your New Deck ?</Text>

            <TextInput
                onChangeText={(Input) => this.setState({Input})}
                value={this.state.Input}
                style={styles.form}
                placeholder='Enter Deck Title'/>
            <TouchableOpacity style={styles.buttonCorrect} onPress={()=>this.submit()}>
                    <Text style={styles.textbtn}>Submit</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>

        )
    }
}
const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        padding: 20
    },
    form:{
        borderWidth:3,
        borderRadius:20,
        padding:20,
        marginTop:20,
        width:300,
        height:60,
        fontWeight:'bold',
        fontSize:20,
        color:'#872805',
        borderColor:'#872805'
    },
      text:{
        fontSize:40,
        fontWeight:'bold',
        color:'#872805',
        textAlign:'center'
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

function mapStateToProps(title){
    return{
        title
    }
}
export default connect()(NewDeck)
