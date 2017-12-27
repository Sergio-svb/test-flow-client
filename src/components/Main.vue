<template>
    <section class="main">
        <form class="filtering">
            <div class="filtering__item">
                <label class="filtering__item__label">Filter title</label>
                <input type="text" class="filtering__item__input" v-model="filter"/>
            </div>
        </form>
        <div v-for="item in filtered" class="card">
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
                filter: '',
                items: [],
                more: false
            }
        },
        computed: {
            filtered: function () {
                console.log(typeof this.filter);
                if (this.filter !== '') {
                    return this.items.filter(value => value.name.includes(this.filter));
                } else {
                    return this.items;
                }
            }
        },
        methods: {
            init () {
                axios.get('http://localhost:8000/episodes')
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
    .main {
        text-align: left;

        .filtering {
            margin-left: 1rem;
            width: 250px;

            &__item {
                display: flex;
                flex-direction: column;

                &__input {
                    padding: 10px;
                    border: 1px solid #2c3e50;
                    border-radius: 2px;
                }
            }
        }
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