import {reactive} from "vue";

export const store = reactive ({
    arrayPeople: [
        {
            img: "../assets/img/home-page/sezione-5/_1.png",
            name: "Joan Collins",
            role: "student",
            text: "tante parole scritte a caso come se avessero un senso",
        },
        {
            img: "../assets/img/home-page/sezione-5/_2.png",
            name: "virginia Foster",
            role: "Student",
            text: "tante parole scritte a caso come se avessero un senso",
        },
        {
            img: "../assets/img/home-page/sezione-5/_3.png",
            name: "Molly Simone",
            role: "Teacher",
            text: "tante parole scritte a caso come se avessero un senso"
        },
    ],
})