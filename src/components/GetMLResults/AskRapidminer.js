import React from 'react';


const getMatchResult = (data_heroes) => {


        const url = "https://go.rapidminer.com/am/api/deployments/6882a8a2-92c6-445c-932c-f5c2dd2a3d07"

        const post_r = JSON.stringify({
                radiant_hero_1_name: data_heroes.radiantHero1 ,
                radiant_hero_2_name: data_heroes.radiantHero2,
                radiant_hero_3_name: data_heroes.radiantHero3,
                radiant_hero_4_name: data_heroes.radiantHero4,
                radiant_hero_5_name: data_heroes.radiantHero5,
                dire_hero_1_name: data_heroes.direHero1 ,
                dire_hero_2_name: data_heroes.direHero2 ,
                dire_hero_3_name: data_heroes.direHero3 ,
                dire_hero_4_name: data_heroes.direHero4 ,
                dire_hero_5_name: data_heroes.direHero5
            })

        const post_rr = "{ \"data\": [" + post_r + "]}"



        fetch(url,{
            method: 'POST',
            headers: {
      'Content-Type': 'application/json'
    },
            body: post_rr

            }


        ).then(res => res.json()).then((data) => {

                this.setState( {contradict_prediction : {hero: [], val: []}})
                this.setState( {support_prediction : {hero: [], val: []}})



                this.state.radiantHero1_val = 0;
                this.state.radiantHero2_val = 0;
                this.state.radiantHero3_val = 0;
                this.state.radiantHero4_val = 0;
                this.state.radiantHero5_val = 0;
                this.state.direHero1_val = 0;
                this.state.direHero2_val = 0;
                this.state.direHero3_val = 0;
                this.state.direHero4_val = 0;
                this.state.direHero5_val = 0;

                console.log(data['data'][0])


                const contradict_len = data['data'][0]['Contradict Prediction'].split(';').length;
                const contradict_arr = data['data'][0]['Contradict Prediction'].split(';');


                for (var i = 0; i < contradict_len; i++) {

                    if (data['data'][0]['Contradict Prediction'].length===0){
                        continue
                    }
                    const contradict_elem = contradict_arr[i].split("=").map(Function.prototype.call, String.prototype.trim)

                    const concat_array = {
                        hero: contradict_elem[0],
                        val: parseFloat(contradict_elem[1].split("(")[1].substr(0, 6), 10)

                    }


                    this.state.contradict_prediction.hero = this.state.contradict_prediction.hero.concat(concat_array.hero)
                    this.state.contradict_prediction.val = this.state.contradict_prediction.val.concat(concat_array.val)

                    if (concat_array.hero === "radiant_hero_1_name"){

                        this.state.radiantHero1_val = concat_array.val

                    } else if (concat_array.hero === "radiant_hero_2_name"){

                        this.state.radiantHero2_val = concat_array.val

                    } else if (concat_array.hero === "radiant_hero_3_name"){

                        this.state.radiantHero3_val = concat_array.val

                    } else if (concat_array.hero === "radiant_hero_4_name"){

                        this.state.radiantHero4_val = concat_array.val

                    } else if (concat_array.hero === "radiant_hero_5_name"){

                        this.state.radiantHero5_val = concat_array.val

                    } else if (concat_array.hero === "dire_hero_1_name"){

                        this.state.direHero1_val = concat_array.val

                    } else if (concat_array.hero === "dire_hero_2_name"){

                        this.state.direHero2_val = concat_array.val

                    } else if (concat_array.hero === "dire_hero_3_name"){

                        this.state.direHero3_val = concat_array.val

                    } else if (concat_array.hero === "dire_hero_4_name"){

                        this.state.direHero4_val = concat_array.val

                    } else if (concat_array.hero === "dire_hero_5_name"){

                        this.state.direHero5_val = concat_array.val

                    }


                }

                const support_len = data['data'][0]['Support Prediction'].split(';').length;
                const support_arr = data['data'][0]['Support Prediction'].split(';')

                for (var i = 0; i < support_len; i++) {

                    const support_elem = support_arr[i].split("=").map(Function.prototype.call, String.prototype.trim)

                    const concat_array = {
                        hero: support_elem[0],
                        val: parseFloat(support_elem[1].split("(")[1].substr(0, 6), 10)

                    }


                    this.state.support_prediction.hero = this.state.support_prediction.hero.concat(concat_array.hero)
                    this.state.support_prediction.val = this.state.support_prediction.val.concat(concat_array.val)


                    if (concat_array.hero === "radiant_hero_1_name"){

                        this.state.radiantHero1_val = concat_array.val

                    } else if (concat_array.hero === "radiant_hero_2_name"){

                        this.state.radiantHero2_val = concat_array.val

                    } else if (concat_array.hero === "radiant_hero_3_name"){

                        this.state.radiantHero3_val = concat_array.val

                    } else if (concat_array.hero === "radiant_hero_4_name"){

                        this.state.radiantHero4_val = concat_array.val

                    } else if (concat_array.hero === "radiant_hero_5_name"){

                        this.state.radiantHero5_val = concat_array.val

                    } else if (concat_array.hero === "dire_hero_1_name"){

                        this.state.direHero1_val = concat_array.val

                    } else if (concat_array.hero === "dire_hero_2_name"){

                        this.state.direHero2_val = concat_array.val

                    } else if (concat_array.hero === "dire_hero_3_name"){

                        this.state.direHero3_val = concat_array.val

                    } else if (concat_array.hero === "dire_hero_4_name"){

                        this.state.direHero4_val = concat_array.val

                    } else if (concat_array.hero === "dire_hero_5_name"){

                        this.state.direHero5_val = concat_array.val

                    }

                }


                console.log( this.state.contradict_prediction )
                console.log( this.state.support_prediction )





            this.state.confidence_false = Math.round(data['data'][0]['confidence(False)']*100);
            this.state.confidence_true = Math.round(data['data'][0]['confidence(True)']*100);


            return data

            }



             )


        }

export default getMatchResult()