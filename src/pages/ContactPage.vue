<script>
import AppJumbotron from "../components/AppJumbotron.vue";
import ContactOfficeAndForm from "../components/ContactOfficeAndForm.vue";
import ContactMap from "../components/ContactMap.vue";
import ContactSocialsAndNews from "../components/ContactSocialsAndNews.vue";
import AppTopButton from "../components/AppTopButton.vue";
import SideButtons from "../components/SideButtons.vue";

export default{
    components: {
        AppJumbotron,
        ContactOfficeAndForm,
        ContactMap,
        ContactSocialsAndNews,
        AppTopButton,
        SideButtons,
    },
    data(){
        return{
            jumbo: {
                title: "Contact",
                home: "Home"
            },
        }
    }
}
</script>

<template>
<main>
    <AppJumbotron :propTitle="jumbo" />
    <ContactOfficeAndForm />
    <ContactMap />
    <ContactSocialsAndNews />
    <AppTopButton />
    <SideButtons />
</main>
</template>

<style scoped lang="scss">

</style>