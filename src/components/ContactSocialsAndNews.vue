<script>
export default {

}
</script>

<template>
    <div class="container py-5 ms_fs">
        <div class="row justify-content-between text-center">
            <div class="col-sm-12 col-md-6 col-lg-3 my-3">
                <h6 class="title-font">Subscribe to Newsletter</h6>
                <p class="text-secondary">Get updates for New Classes</p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3 my-3">
                <div class="border row p-3">
                    <input type="text" placeholder="Enter your email" aria-label="Enter your email" class="border-0 col-10">
                    <button type="button" class="border-0 bg-transparent col-2"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3 my-3">
                <div class="d-flex justify-content-center">
                    <h6 class="title-font px-2">Follow Us:</h6>
                    <ul class="d-flex justify-content-between p-0 m-0">
                        <li class="px-2"><a href="#"><i class="fa-brands fa-twitter ms_blue-hover"></i></a></li>
                        <li class="px-2"><a href="#"><i class="fa-brands fa-instagram ms_blue-hover"></i></a></li>
                        <li class="px-2"><a href="#"><i class="fa-brands fa-facebook-f ms_blue-hover"></i></a></li>
                    </ul>
                </div>
                <div>
                    <p class="text-secondary">We want to hear from you!</p>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3 my-3">
                <h6 class="title-font">
                    Call Us: <span class="c-b">060 777 9999</span>
                </h6>
                <div class="text-secondary">
                    Do not hesitate tu contact us
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

input:focus {
    outline: none;
}

.ms_fs {
    font-size: 12px;
}

.ms_blue-hover:hover,
.c-b {
        color: #40c4ff;
}

a {
    text-decoration: none;
    color: inherit;
}

</style>