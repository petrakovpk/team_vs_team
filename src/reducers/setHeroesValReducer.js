import {
    CHANGE_RADIANT_HERO_1_VAL,
    CHANGE_RADIANT_HERO_2_VAL,
    CHANGE_RADIANT_HERO_3_VAL,
    CHANGE_RADIANT_HERO_4_VAL,
    CHANGE_RADIANT_HERO_5_VAL,
    CHANGE_DIRE_HERO_1_VAL,
    CHANGE_DIRE_HERO_2_VAL,
    CHANGE_DIRE_HERO_3_VAL,
    CHANGE_DIRE_HERO_4_VAL,
    CHANGE_DIRE_HERO_5_VAL

} from  '../actions/setHeroVal.js'

const defaultState = {

    radiantHero1_val: 0,
    radiantHero2_val: 0,
    radiantHero3_val: 0,
    radiantHero4_val: 0,
    radiantHero5_val: 0,
    direHero1_val: 0,
    direHero2_val: 0,
    direHero3_val: 0,
    direHero4_val: 0,
    direHero5_val: 0,
}

export const setHeroesValReducer = (state = defaultState, action) => {

     switch (action.type) {

         case CHANGE_RADIANT_HERO_1_VAL:
             return {
                 ...state,
                 radiantHero1_val: action.payload
             };
         case CHANGE_RADIANT_HERO_2_VAL:
             return {
                 ...state,
                 radiantHero2_val: action.payload
             };
         case CHANGE_RADIANT_HERO_3_VAL:
             return {
                 ...state,
                 radiantHero3_val: action.payload
             };
         case CHANGE_RADIANT_HERO_4_VAL:
             return {
                 ...state,
                 radiantHero4_val: action.payload
             };
         case CHANGE_RADIANT_HERO_5_VAL:
             return {
                 ...state,
                 radiantHero5_val: action.payload
             };

         case CHANGE_DIRE_HERO_1_VAL:
             return {
                 ...state,
                 direHero1_val: action.payload
             };

         case CHANGE_DIRE_HERO_2_VAL:
             return {
                 ...state,
                 direHero2_val: action.payload
             };

         case CHANGE_DIRE_HERO_3_VAL:
             return {
                 ...state,
                 direHero3_val: action.payload
             };

         case CHANGE_DIRE_HERO_4_VAL:
             return {
                 ...state,
                 direHero4_val: action.payload
             };

         case CHANGE_DIRE_HERO_5_VAL:
             return {
                 ...state,
                 direHero5_val: action.payload
             };
     }


    return state
}
