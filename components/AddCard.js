import React,{Component} from 'react'
import {Text,View,StyleSheet,KeyboardAvoidingView,TextInput,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { saveDeckQuestion } from '../actions'
import { addCardToDeck  } from '../utils/AsyncStorage'

class AddCard extends Component{
  state={
    ques: '',
    ans: ''
  }

  submit = () => {
    const { ques, ans } = this.state
    const { title, dispatch } = this.props

    if (ques.trim() && ans.trim()) {
      addCardToDeck(title, { ques, ans })
        .then(() => dispatch(saveDeckQuestion(title, ques, ans)))
      this.setState({ques: '', ans: ''})
      this.props.navigation.goBack();
    } else {
      alert('Field is empty.')
    }

  }

    render(){
      return(
          <KeyboardAvoidingView style={styles.container} behavior='padding'>
               <TextInput
                onChangeText={(ques) => this.setState({ques})}
                value={this.state.ques}
                style={styles.form}
                placeholder='Question Here'/>
               <TextInput
                onChangeText={(ans) => this.setState({ans})}
                value={this.state.ans}
                style={styles.form}
                placeholder='Answer Here' />
               <TouchableOpacity style={styles.buttonCorrect} onPress={this.submit}>
                  <Text style={styles.textbtn}>Submit</Text>
              </TouchableOpacity>

          </KeyboardAvoidingView>
          )
    }
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
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
    textbtn:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        fontFamily:'',
    },
      buttonCorrect: {
      padding: 30,
      borderRadius:20,
      width:200,
      backgroundColor:'#872805',
      marginTop:30,
   },
})

function mapStateToProps (decks, { navigation }) {
  const { title } = navigation.state.params;

  return {
    title,
    deck: decks[title]
  }
}

export default connect(mapStateToProps)(AddCard)
