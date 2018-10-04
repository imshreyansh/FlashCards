export const GET_DECKS = 'GET_DECKS'
export const GET_DECK_TITLE = 'GET_DECK_TITLE'
export const SAVE_DECK_QUESTION = 'SAVE_DECK_QUESTION'

export function receiveDecks (decks) {
    return {
        type: GET_DECKS,
        decks
    }
}

export function getDeckTitle (title) {
    return {
        type: GET_DECK_TITLE,
        deck: {
            [title]: {
                title,
                questions: []
            }
        }
    }
}

export function saveDeckQuestion (title, question, answer) {
    return {
        type:SAVE_DECK_QUESTION,
        title,
        obj: {
            question,
            answer
        }
    }
}
