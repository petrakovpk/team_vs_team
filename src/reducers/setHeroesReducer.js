import { CHANGE_RADIANT_HERO_1, CHANGE_RADIANT_HERO_2 } from '../actions/setHero.js'
import React from "react";

const defaultState = {

    radiantHero1_name: '',
    radiantHero2_name: ''

};

export const setHeroesReducer = (state = defaultState, action) => {

    switch (action.type) {

        case CHANGE_RADIANT_HERO_1:
            return {
                ...state,
                radiantHero1_name: action.payload
            };
        case CHANGE_RADIANT_HERO_2:
            return {
                ...state,
                radiantHero2_name: action.payload
            }
    }



    return state;
}
