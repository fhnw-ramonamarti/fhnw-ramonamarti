import {
    SelectComponent,
    pageCss,
} from "http://127.0.0.1:5500/docs/src/kolibri/selectComponent/selectComponent.js";
// } from "https://fhnw-ramonamarti.github.io/Kolibri/src/examples/select-new/selectComponent.js";
import * as Service from "./userTest/dataService.js";

// load style for new component
const style = document.createElement("style");
style.textContent = pageCss;
document.querySelector("head").append(style);

// helper to replace elements to form
const addSelectViewToUi = (id, labelElement, inputElement) => {
    const inputContainer = document.getElementById(id);
    const labelContainer = document.getElementById(id + "-label");
    labelContainer.replaceWith(labelElement);
    inputContainer.replaceWith(inputElement);
};

// ----- TASK 1 --------

const selectAttributes1 = {
    name: "lunch",
    label: "Lunch",
};
const serviceColumns1 = [Service.getLunchTypes];
const [_1, label1, input1] = SelectComponent(selectAttributes1, serviceColumns1);
addSelectViewToUi("task1-lunch", label1, input1);

// ----- TASK 2 --------

const selectAttributes2_1 = {
    name: "home-region",
    label: "Home region",
    numberOfColumns: 2,
};
const serviceColumns2_1 = [Service.getRegionsByCountryChDeAt, Service.getCountriesChDeAt];
const [_2_1, label2_1, input2_1] = SelectComponent(selectAttributes2_1, serviceColumns2_1);
addSelectViewToUi("task2-home-region", label2_1, input2_1);

const selectAttributes2_2 = {
    name: "birth-region",
    label: "Birth region",
    numberOfColumns: 2,
};
const serviceColumns2_2 = [Service.getRegionsByCountry, Service.getCountries];
const [_2_2, label2_2, input2_2] = SelectComponent(selectAttributes2_2, serviceColumns2_2);
addSelectViewToUi("task2-birth-region", label2_2, input2_2);

const selectAttributes2_3 = {
    name: "birth-year",
    label: "Birth year",
    numberOfColumns: 2,
};
const serviceColumns2_3 = [Service.getYearsByDecade, Service.getDecades];
const [_2_3, label2_3, input2_3] = SelectComponent(selectAttributes2_3, serviceColumns2_3);
addSelectViewToUi("task2-birth-year", label2_3, input2_3);
