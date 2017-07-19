import * as constants from '../constants';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export interface CountClick {
    type: constants.COUNT_CLICK
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm | CountClick;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}

export function countClick(): CountClick {
    return {
        type: constants.COUNT_CLICK
    }
}