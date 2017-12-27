<template>
    <section class="hello">
        <md-card md-with-hover v-for="item in items" :key="item.id">
            <md-ripple>
                <md-card-media>
                    <img :src="item.image.medium" alt="People">
                </md-card-media>

                <md-card-header>
                    <div class="md-title">{{ item.name }}</div>
                    <div class="md-subhead">Subtitle here</div>
                </md-card-header>

                <md-card-content v-html="item.summary"></md-card-content>

                <md-card-actions>
                    <md-button>Action</md-button>
                </md-card-actions>
            </md-ripple>
        </md-card>
    </section>
</template>

<script>
    import axios from 'axios';
    import Expansion from './Expansion.vue';

    export default {
        name: "hello",
        components: {
          Expansion
        },
        data () {
            return {
                items: [],
                more: false
            }
        },
        methods: {
            init () {
                axios.get('http://localhost:8000/episodes?season=4')
                    .then(response => {
                        console.log(response.data);
                        this.items = response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        mounted () {
            this.init();
        }
    }
</script>

<style lang="scss" scoped>
    .md-card-media {
        width: 100%;
        height: 140px;
    }
    .md-card {
        width: 250px;
        height: 636px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }

    .card {
        background: #fff;
        border-radius: 2px;
        display: inline-block;
        position: relative;
        margin: 1rem;
        width: 250px;
        height: 275px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);

        &__image {
            position: absolute;
            top: 0;
            left: 0;
            width: 250px;
            height: 140px;
        }

        &__title {
            position: absolute;
            top: 140px;
            left: 0;
            width: calc(100% - 20px);
            padding: 0 10px;
            text-align: left;
            font-weight: 400;
            font-size: 24px;
        }

        &__more {
            position: absolute;
            bottom: 0;
            right: 0;
            text-transform: uppercase;
            padding: 20px 10px;
            font-weight: 500;
            font-size: 14px;

            > span {
                cursor: pointer;
            }
        }
    }

    .card:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
</style>