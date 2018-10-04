import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,} from 'react-native'
import { connect } from 'react-redux';

class Deck extends Component {
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params
        return {
            title
        }
    }


    render(){
        const { title, deckInfo } = this.props;

        return(
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}>{deckInfo.questions.length} cards</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AddCard', {title})}>
                    <Text style={styles.textbtn}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, {opacity: deckInfo.questions.length === 0 ? 0.5 : 1}]}
                    onPress={() => this.props.navigation.navigate('Quiz', {title})}
                    disabled={deckInfo.questions.length === 0 ? true : false} >
                    <Text style={styles.textbtn}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    text:{
        fontSize:50,
        fontWeight:'bold',
        textAlign:'center',
        color:'#872805',
        margin:10
    },
    button: {
      padding: 30,
      borderRadius:10,
      width:200,
      backgroundColor:'#BC3908',
      margin:20
   },
    textbtn:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
    },

})

function mapStateToProps (decks, { navigation }) {
    const { title } = navigation.state.params;
    return {
        title,
        deckInfo: decks[title]
    }
}

export default connect(mapStateToProps)(Deck)
