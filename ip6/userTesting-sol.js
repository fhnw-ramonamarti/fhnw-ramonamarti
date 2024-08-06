import {
    SelectComponentByCallbacks as SelectComponent,
    pageCss,
} from "https://fhnw-ramonamarti.github.io/Kolibri/src/kolibri/projector/selectComponent/selectComponent.js";
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
const [label1, input1] = SelectComponent(selectAttributes1, serviceColumns1).getComponentView().children;
addSelectViewToUi("task1-lunch", label1, input1);

// ----- TASK 2 --------

const selectAttributes2_1 = {
    name: "home-region",
    label: "Home region",
    numberOfColumns: 2,
};
const serviceColumns2_1 = [Service.getCountriesChDeAt, Service.getRegionsByCountryChDeAt];
const [label2_1, input2_1] = SelectComponent(selectAttributes2_1, serviceColumns2_1).getComponentView().children;
addSelectViewToUi("task2-home-region", label2_1, input2_1);

const selectAttributes2_2 = {
    name: "birth-region",
    label: "Birth region",
    numberOfColumns: 2,
};
const serviceColumns2_2 = [Service.getCountries, Service.getRegionsByCountry];
const [label2_2, input2_2] = SelectComponent(selectAttributes2_2, serviceColumns2_2).getComponentView().children;
addSelectViewToUi("task2-birth-region", label2_2, input2_2);

const selectAttributes2_3 = {
    name: "birth-year",
    label: "Birth year",
    numberOfColumns: 2,
};
const serviceColumns2_3 = [Service.getDecades, Service.getYearsByDecade];
const [label2_3, input2_3] = SelectComponent(selectAttributes2_3, serviceColumns2_3).getComponentView().children;
addSelectViewToUi("task2-birth-year", label2_3, input2_3);
