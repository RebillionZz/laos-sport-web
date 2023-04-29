<template>
    <v-container>
    <div>
        
        <div class="text-center mb-2">
          <v-img
            src="https://resources.premierleague.com/premierleague/photo/2022/11/08/62ba92c6-dc8b-4dbf-85de-1b0f60875d06/Nike-Flight-match-ball-about-to-be-kicked.jpg"
            max-height="480px"
            max-width="1200px"
          >
          </v-img>
        </div>
    </div>

    <v-card class="mt-3">
        <div class="news-info">
        <v-card-title>
      <h1>{{news.title}}</h1>
        </v-card-title>
    <v-card-text>
      <h5>They were worried about the huge celebrations on Saturday if Napoli won their game - at the same time as a major comic book convention, which is expected to draw big crowds, is happening in the city.

There would have been a huge party again on Sunday if the title was secured.

Naples Prefect Claudio Palomba said on Thursday "the need arose to avoid events overlapping in order to help the police".

"Had we kept the match on Saturday we would have had to double our resources and for that reason we have adopted a number of measures," he added.

Napoli have only ever won the Serie A title twice before, both in the days of legend Diego Maradona - who their stadium is named after these days, in 1987 and 1990.

If they do win the title this weekend - they are 17 points clear of Lazio - it will be in record-breaking fashion. No side has ever been crowned Serie A winners with six games to go.

"I don't like to celebrate in advance," boss Luciano Spalletti said. "If we all do it together there will be twice as much joy."

Napoli's following match, at Udinese, will be moved from Tuesday to Thursday at 19:45 BST.</h5>
    </v-card-text>
    </div>
    </v-card>
</v-container>
</template>

<script>
export default {
    name: 'LaosSportNewsInfo',

    data() {
        return {
            news: {
        title: "Broadcast Picks and Fixture Changes Announced",
            }
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>