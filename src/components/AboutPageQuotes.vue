<script>
import AppCardStudent from './AppCardStudent.vue';

export default {
    components: {
        AppCardStudent
    },

    props: {
        propCard: Object,
    },

    data() {
        return {
            active: 0,
            arrayPeople: [

            ],
        }
    },
    methods: {
        getImage(elem) {
            return new URL(`../assets/img/about-page/quotes-img/quoteimg${elem}.jpg`, import.meta.url).href;
        },
        changeActivePlus() {
            //  inserire set interval per andare in avanti e stoppare il set che va indietro
            //  se è gia attivo lo metto in pausa
            console.log(this.active);
            if (this.active <= 1) {
                this.active++;
            } else {
                this.active = 0;
            }
        },
        changeActiveLess() {
            //  inserire set interval per andare indietro e stoppare il set che va in avanti
            //  se è gia attivo lo metto in pausa
            console.log(this.active);
            if (this.active >= 1) {
                this.active--;
            } else {
                this.active = 2;
            }
        }
    }
}
</script>

<template>

    <!-- da usare il carosello -->
    <div class="container-fluid w-100 d-flex flex-column justify-content-center align-items-center text-center">
        <img class="background w-100 h-100" src="../assets/img/home-page/globo.png" alt="">
        <div :class="index === active ? 'd-flex' : 'd-none'" v-for="curElem, index in arrayPeople"
        class="card d-flex justify-content-center align-items-center h-100 p-2">

            <img :src="getImage(curElem.img)" alt="">
            <p>{{ curElem.text }}</p>
            <p>{{ curElem.name }}</p>
            <p>{{ curElem.role }}</p>
            <div class="d-flex gap-3">
            <i @click.stop="active=0" :class="active === 0 ? 'fa-solid' : 'fa-regular'" class="fa-circle"></i>
            <i @click.stop="active=1" :class="active === 1 ? 'fa-solid' : 'fa-regular'" class="fa-circle"></i>
            <i @click.stop="active=2" :class="active === 2 ? 'fa-solid' : 'fa-regular'" class="fa-circle"></i>
            </div>
            

        </div>
        <button @click.prevent.stop="changeActiveLess" class="carousel-control-prev" type="button"
            data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button @click.prevent.stop="changeActivePlus" class="carousel-control-next" type="button"
            data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

.container-fluid {
    position: relative;
    height: 50vh;
    margin-bottom: 100px;

    .background {
        position: absolute;
        top: 0;
        left: 0;
    }

    .card {
        color: $white;
        background-color: transparent;
        position: relative;
        width: 80%;
        --bs-card-border-width: 0;

        img {
            width: 80px;
            border-radius: 50%;
        }

    }
}
</style>