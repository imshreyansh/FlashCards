import { GET_DECKS, GET_DECK_TITLE, SAVE_DECK_QUESTION } from '../actions'

export default function decks (state = {}, action) {
    switch (action.type) {
        case GET_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case GET_DECK_TITLE:
            return {
                ...state,
                ...action.deck
            }
        case SAVE_DECK_QUESTION:
            const { title, obj } = action

            return {
                ...state,
                [title]: {
                    ...state[title],
                    questions: state[title].questions.concat(obj)
                }
            }
        default:
            return state
    }
}
