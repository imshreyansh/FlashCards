import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {getDecks} from '../utils/AsyncStorage'
import {receiveDecks} from '../actions'

class Decks extends Component{
    componentDidMount () {
        const { dispatch } = this.props;

        getDecks()
            .then((decks) => dispatch(receiveDecks(decks)));
    }

    render(){
        const { decks } = this.props;

        return(
            <ScrollView>
            <View style={styles.container}>
                {Object.keys(decks).map((deck) => (
                    <TouchableOpacity key={deck} onPress={() => this.props.navigation.navigate('Deck', {'title': deck})}>
                        <View style={styles.box}>
                            <Text style={styles.text}>{deck}</Text>
                            <Text style={styles.text}>{decks[deck].questions.length} cards</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        alignItems: 'center'
    },
    box: {
        marginTop:20,
        height:150,
        width:350,
        backgroundColor:'#BC3908',
        borderRadius:30
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        padding:12,
        color:'white',
    }
})
function mapStateToProps(decks) {
    return {
        decks
    }
}
export default connect(mapStateToProps)(Decks)
