// import { projectForm, FORM_CSS }  from "http://127.0.0.1:5500/docs/src/kolibri/projector/simpleForm/simpleFormProjector.js"
// import { SimpleFormController }   from "http://127.0.0.1:5500/docs/src/kolibri/projector/simpleForm/simpleFormController.js"
// import { TEXT, CHOICE, COMBOBOX } from "http://127.0.0.1:5500/docs/src/kolibri/util/dom.js";
import { projectForm, FORM_CSS }  from "https://fhnw-ramonamarti.github.io/Kolibri/src/kolibri/projector/simpleForm/simpleFormProjector.js"
import { SimpleFormController }   from "https://fhnw-ramonamarti.github.io/Kolibri/src/kolibri/projector/simpleForm/simpleFormController.js"
import { TEXT, CHOICE, COMBOBOX } from "https://fhnw-ramonamarti.github.io/Kolibri/src/kolibri/util/dom.js";

import * as Service               from "./dataService.js";

// load style 
const style = document.createElement("style");
style.textContent = FORM_CSS;
document.querySelector("head").append(style);

// prepare filling container
const fillContainer = (id, title, buildForm) => {
    const formHolder = document.getElementById(id);
    if (null != formHolder) {
        const [fieldset]     = buildForm();
        formHolder.innerHTML = `<h3>${title}</h3>`;
        formHolder.append(fieldset);
    }
};

// prepare containes to do the tasks in
const replaceField = (id, name) => {
    const inputElement = document.getElementById(id).querySelector(`[name=${name}]`);
    const inputId      = inputElement.id;
    const fieldset     = inputElement.closest("fieldset")
    const labelElement = fieldset.querySelector(`[for="${inputId}"]`);
    const spanElement  = fieldset.querySelector(`span[data-id="${inputId}"]`);

    const containerLabel  = document.createElement("span");
    containerLabel.id     = id + "-" + name + "-label";
    const container       = document.createElement("span");
    container.id          = id + "-" + name;
    container.textContent = "TODO";
    container.classList.add("newComponent");
    spanElement.replaceWith(container);
    labelElement.replaceWith(containerLabel);

    return [containerLabel, container];
};

// ----- DEMO 1 --------
const demo1 = () => {
    /** @type { Array<OptionType> } */
    const types = Service.getLunchTypes().map((types) => ({ value: types }));

    const formStructure = [
        { value: "", label: "Name",   name: "name",  type: TEXT },
        { value: "", label: "Lunch", name: "lunch", type: COMBOBOX, list: types },
    ];
    const controller = SimpleFormController(formStructure);
    return projectForm(controller);
};
fillContainer("demo1", "Demo 1 - Short datalist", demo1);

// ----- TASK 1 --------
const task1 = () => {
    
    const formStructure = [
        { value: "", label: "Name",  name: "name",  type: TEXT     },
        { value: "", label: "Lunch", name: "lunch", type: "hidden" },
    ];
    const controller = SimpleFormController(formStructure);
    return projectForm(controller);
};
fillContainer("task1", "Task 1 - 1 column layout", task1);
replaceField("task1", "lunch");

// ----- DEMO --------
const demo2 = () => {
    /** @type { Array<OptionType> } */
    const years = Service.getYearsByDecade().map((year) => ({ value: year }));

    /** @type { Array<OptionType> } */
    const filterRegionsChDeAt = (countryCode) =>
        Service.getRegionsByCountryChDeAt(countryCode).map((region) => ({ value: region }));

    /** @type { Array<OptionType> } */
    const filterRegions = (countryCode) =>
        Service.getRegionsByCountry(countryCode).map((region) => ({ value: region }));
    const formStructure = [
        { value: "", label: "Name",       name: "name",      type: TEXT },
        {
            value: "Aargau",
            label: "Home region",
            name: "home-region",
            type: CHOICE,
            list: filterRegionsChDeAt(),
        },
        {
            value: "",
            label: "Birth region",
            name: "birth-region",
            type: CHOICE,
            list: filterRegions(),
        },
        { value: "", label: "Birth year", name: "birth-year", type: CHOICE, list: years },
    ];
    const controller = SimpleFormController(formStructure);
    return projectForm(controller);
};
fillContainer("demo2", "Demo 2 - Long selects", demo2);

// ----- TASK 2 --------
const task2 = () => {
    
    const formStructure = [
        { value: "",   label: "Name",         name: "name",         type: TEXT     },
        { value: "",   label: "Home region",  name: "home-region",  type: "hidden" },
        { value: "",   label: "Birth region", name: "birth-region", type: "hidden" },
        { value: "",   label: "Birth year",   name: "birth-year",   type: "hidden" },
    ];
    const controller = SimpleFormController(formStructure);
    return projectForm(controller);
};
fillContainer("task2", "Task 2 - 2 column layout", task2);
replaceField("task2", "home-region");
replaceField("task2", "birth-region");
replaceField("task2", "birth-year");
