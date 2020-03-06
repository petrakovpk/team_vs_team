import React from 'react';
import store from '../../store/store.js';
import {
    changeRadiantHero1Val
    , changeRadiantHero2Val
    , changeRadiantHero3Val
    , changeRadiantHero4Val
    , changeRadiantHero5Val
    , changeDireHero1Val
    , changeDireHero2Val
    , changeDireHero3Val
    , changeDireHero4Val
    , changeDireHero5Val

} from  '../../actions/setHeroVal.js'


export const getMatchResult  = () => {

      const state = store.getState();

      const heroes = state.setHeroesReducer;

        const url = "https://go.rapidminer.com/am/api/deployments/6882a8a2-92c6-445c-932c-f5c2dd2a3d07"

        const post_r = JSON.stringify({
                radiant_hero_1_name: heroes.radiantHero1_name ,
                radiant_hero_2_name: heroes.radiantHero2_name,
                radiant_hero_3_name: heroes.radiantHero3_name,
                radiant_hero_4_name: heroes.radiantHero4_name,
                radiant_hero_5_name: heroes.radiantHero5_name,
                dire_hero_1_name: heroes.direHero1_name,
                dire_hero_2_name: heroes.direHero2_name ,
                dire_hero_3_name: heroes.direHero3_name ,
                dire_hero_4_name: heroes.direHero4_name,
                dire_hero_5_name: heroes.direHero5_name
            });

        const post_rr = "{ \"data\": [" + post_r + "]}";

        fetch(url,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: post_rr
        })
            .then(res => res.json()).then((data) => {


                for (var p = 0; p < 2; p++)
                {

                    let type = ''

                    if(p===0) {
                        type = 'Support Prediction'
                    }


                    if(p===1) {
                        type = 'Conradict Prediction'
                    }




                    if (data['data'][0][type] === undefined ) {
                            continue
                        }



                    const arr_len = data['data'][0][type].split(';').length;
                    const arr = data['data'][0][type].split(';');


                    for (var i = 0; i < arr_len; i++) {




                        const arr_elem = arr[i].split("=").map(Function.prototype.call, String.prototype.trim)

                        const concat_array = {
                            hero: arr_elem[0],
                            val: parseFloat(arr_elem[1].split("(")[1].substr(0, 6), 10)

                        }

                        switch (concat_array.hero) {

                            case 'radiant_hero_1_name':

                                store.dispatch(changeRadiantHero1Val(concat_array.val))

                                continue

                            case 'radiant_hero_2_name':

                                store.dispatch(changeRadiantHero2Val(concat_array.val))

                                continue

                            case 'radiant_hero_3_name':

                                store.dispatch(changeRadiantHero3Val(concat_array.val))

                                continue

                            case 'radiant_hero_4_name':

                                store.dispatch(changeRadiantHero4Val(concat_array.val))

                                continue

                            case 'radiant_hero_5_name':

                                store.dispatch(changeRadiantHero5Val(concat_array.val))

                                continue

                            case 'dire_hero_1_name':

                                store.dispatch(changeDireHero1Val(concat_array.val))

                                continue

                            case 'dire_hero_2_name':

                                store.dispatch(changeDireHero2Val(concat_array.val))

                                continue

                            case 'dire_hero_3_name':

                                store.dispatch(changeDireHero3Val(concat_array.val))

                                continue

                            case 'dire_hero_4_name':

                                store.dispatch(changeDireHero4Val(concat_array.val))

                                continue

                            case 'dire_hero_5_name':

                                store.dispatch(changeDireHero5Val(concat_array.val))

                                continue
                        }

                    }


                }
            }



             )


    return 1


        }


