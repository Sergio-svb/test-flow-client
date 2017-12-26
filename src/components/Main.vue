<template>
    <section class="hello">
        <div v-for="item in items" class="card">
            <img :src="item.image.medium">
            <h3 class="card__title">{{ item.name }}</h3>
            <div v-html="item.summary" v-if="more"></div>
            <div v-else class="card__more"><span>LEARN MORE</span></div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "hello",
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
    .card {
        background: #fff;
        border-radius: 2px;
        display: inline-block;
        margin: 1rem;
        width: 300px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);

        &__title {
            text-align: left;
            font-weight: 400;
            padding: 0 10px;
            font-size: 24px;
        }

        &__more {
            text-align: right;
            font-weight: 500;
            padding: 20px 10px;
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