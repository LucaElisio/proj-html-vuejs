<script>
export default {
    data() {
        return {
            show: false,
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        toTop: function () {
            document.documentElement.scrollTop = 0;
        },
        handleScroll: function () {
            this.show = window.scrollY > 200;
        }
    }
}
</script>

<template>
    <div 
    class="text-white d-flex flex-column justify-content-center align-items-center position-fixed bottom-0 end-0 ms_aspect" 
    @click="toTop" 
    v-if="show"
    >
        <i class="fa-solid fa-chevron-up"></i>
        <span>TOP</span>
    </div>
</template>

<style scoped lang="scss">
.ms_aspect {
    background-color: #40c4ff;
    font-weight: 700;
    width: 55px;
    aspect-ratio: 1;
    cursor: pointer;
    z-index: 99;

    span {
        font-size: 12px;
    }

    &:hover{
        span {
            opacity: 0;
        }
        i {
            transform: translateY(10px);
            transition: transform 0.3s ease;
        }
    }

    i {
        transition: transform 0.3s ease;
    }
}
</style>