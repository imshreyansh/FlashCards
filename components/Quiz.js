import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Percentage from './Percentage'
import {
    setLocalNotification,
    clearLocalNotification
} from '../utils/notification'

class Quiz extends Component {
    state = {
        counter: 0,
        score: 0,
        flip: 0
    }

    componentDidMount () {
        clearLocalNotification()
            .then(setLocalNotification)
    }

    correct = () => {
        this.setState((state) => ({
            counter: state.counter + 1,
            score: state.score + 1
        }))
    }

    incorrect = () => {
        this.setState((state) => ({
            counter: state.counter + 1
        }))
    }

    fliping = () => {
        const { flip } = this.state

        if (flip === 0) {
            this.setState({flip: 1})
        } else {
            this.setState({flip: 0})
        }
    }

    reset = () => {
      this.setState({
          counter: 0,
          score: 0,
          flip: 0
      })
    }

    backToDeck = () => {
      this.props.navigation.goBack();
    }

    render () {
        const { title, deck } = this.props
        const { counter, score, flip } = this.state

        if (deck.questions.length === counter) {
            return <Percentage score={score} counter={counter} reset={this.reset} goBack={this.backToDeck}/>
        }

        return (
            <View>
                <Text style={styles.text}>{counter + 1}/{deck.questions.length}</Text>
                <View style={styles.containerOne}>
                    <Text style={styles.textQues}>
                        {flip === 0 ? deck.questions[counter].question : deck.questions[counter].answer}
                    </Text>
                    <TouchableOpacity
                        style={styles.buttontc}
                        onPress={this.fliping}>
                    <Text style={styles.textAns}>
                        {flip === 0 ? 'Answer' : 'Question'}
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCorrect} onPress={this.correct}>
                        <Text style={styles.textbtn}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonIncorrect} onPress={this.incorrect}>
                        <Text style={styles.textbtn}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    containerOne:{
        flex:1,
        alignItems: 'center'
    },
     text:{
        fontSize:30,
        fontWeight:'bold',
        color:'#872805',
        paddingLeft: 20,
        marginTop: 10,
        marginBottom: 20
    },
     textQues:{
        fontSize:30,
        fontWeight:'bold',
        color:'#872805',
        textAlign:'center'
    },
    textAns:{
        fontSize:30,
        fontWeight:'bold',
        color:'#ff3f34',
        textAlign:'center'
    },
      buttonCorrect: {
      height:50,
      borderRadius:20,
      width:180,
      backgroundColor:'#05c46b',
      marginTop:20,
   },
      buttontc: {
      height:50,
      borderRadius:20,
      width:140,
      backgroundColor:'transparent',
      marginTop:10,
   },
    buttonIncorrect: {
      height:50,
      borderRadius:20,
      width:180,
      backgroundColor:'#ff3f34',
      marginTop:20,
   },
     textbtn:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        marginTop:10
    },
})

function mapStateToProps (decks, { navigation }) {
    const { title } = navigation.state.params

    return {
        title,
        deck: decks[title]
    }
}

export default connect(mapStateToProps)(Quiz)
