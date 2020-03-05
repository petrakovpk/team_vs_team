import { CHANGE_RADIANT_HERO_1
    , CHANGE_RADIANT_HERO_2
    , CHANGE_RADIANT_HERO_3
    , CHANGE_RADIANT_HERO_4
    , CHANGE_RADIANT_HERO_5

    ,CHANGE_DIRE_HERO_1
    ,CHANGE_DIRE_HERO_2
    ,CHANGE_DIRE_HERO_3
    ,CHANGE_DIRE_HERO_4
    ,CHANGE_DIRE_HERO_5


} from '../actions/setHero.js'
import React from "react";

const defaultState = {

    radiantHero1_name: '',
    radiantHero2_name: '',
    radiantHero3_name: '',
    radiantHero4_name: '',
    radiantHero5_name: '',

    direHero1_name: '',
    direHero2_name: '',
    direHero3_name: '',
    direHero4_name: '',
    direHero5_name: '',



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
            };

        case CHANGE_RADIANT_HERO_3:
            return {
                ...state,
                radiantHero3_name: action.payload
            };

        case CHANGE_RADIANT_HERO_4:
            return {
                ...state,
                radiantHero4_name: action.payload
            };

        case CHANGE_RADIANT_HERO_5:
            return {
                ...state,
                radiantHero5_name: action.payload
            };

        case CHANGE_DIRE_HERO_1:
            return {
                ...state,
                direHero1_name: action.payload
            };

        case CHANGE_DIRE_HERO_2:
            return {
                ...state,
                direHero2_name: action.payload
            };
         case CHANGE_DIRE_HERO_3:
            return {
                ...state,
                direHero3_name: action.payload
            };

        case CHANGE_DIRE_HERO_4:
            return {
                ...state,
                direHero4_name: action.payload
            };

        case CHANGE_DIRE_HERO_5:
            return {
                ...state,
                direHero5_name: action.payload
            }
    }



    return state;
}
