const TAGS = {
    USE_WHENEVER: 1,
    CHANGE_DIRECTION: 2,
    APPOINT_CURRENT_PLAYER: 3,
    SHUFFLE_DECK: 4,
    SEE_THE_DECK: 5,
    SKIP_CURRENT_TURN: 6,
    KILL_PLAYER: 7,
};

const CARDS = {
    BOMB: {
        id: 1,
        name: 'BOMB',
        tags: [TAGS.KILL_PLAYER],
    },
    SAPPER: {
        id: 2,
        name: 'SAPPER',
        tags: [],
    },
    CHANGE_THE_FUTURE: {
        id: 3,
        name: 'CHANGE_THE_FUTURE',
        tags: [TAGS.SHUFFLE_DECK, TAGS.SEE_THE_DECK],
    },
    NOT: {
        id: 4,
        name: 'NOT',
        tags: [TAGS.USE_WHENEVER],
    },
    ATTACK: {
        id: 5,
        name: 'ATTACK',
        tags: [TAGS.SKIP_CURRENT_TURN],
    },
    TARGETED_ATTACK: {
        id: 6,
        name: 'TARGETED_ATTACK',
        tags: [TAGS.SKIP_CURRENT_TURN, TAGS.APPOINT_CURRENT_PLAYER],
    },
    SKIP: {
        id: 7,
        name: 'SKIP',
        tags: [TAGS.SKIP_CURRENT_TURN],
    },
    CHANGE_DIRECTION: {
        id: 8,
        name: 'CHANGE_DIRECTION',
        tags: [TAGS.CHANGE_DIRECTION],
    },
};

const ACTION_TYPES = {
    PLAY_CARD: 'PLAY_CARD',
    END_OF_TURN: 'END_OF_TURN',
    INTERACTION_RESPONSE: 'INTERACTION_RESPONSE',
};

module.exports = {
    TAGS,
    CARDS,
    ACTION_TYPES,
};
