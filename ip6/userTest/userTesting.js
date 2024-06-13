import { SelectComponent, pageCss } from "https://fhnw-ramonamarti.github.io/Kolibri/src/examples/select-new/selectComponent.js";
import * as Service                 from "./dataService.js";

// load styles for new component
const style = document.createElement("style");
style.textContent = pageCss;
document.querySelector("head").append(style);

/**
 * helper to replace elements to form
 * @param {*} id - id of the html element to place the projected elements in
 * @param {*} labelElement - new label to relape in the form
 * @param {*} inputElement - new input element to relape in the form
 * @example
        addSelectViewToUi("task1", lunchLabelElement, lunchInputElement);
 */
const addSelectViewToUi = (id, labelElement, inputElement) => {
    const inputContainer = document.getElementById(id);
    const labelContainer = document.getElementById(id + "-label");
    labelContainer.replaceWith(labelElement);
    inputContainer.replaceWith(inputElement);
}

// NOTE: You can read about our project in README.md file. 
// Please follow the TODO's for the five tasks.
// The tasks are structured in the UI as follows:
//      1. Demo container with the usage of an existing way to create a selection input.
//      2. Task container with TODO's placeholder is positioned in the form 
//              where the new componenent should be fit in.


// ----- TASK 1 ----------
/*
    TODO: Create a selection input using our new component.
    The label should be 'Lunch' and the name 'lunch'.
    The resulting component should provide 1 column with the data.
    The data is provided by the function `Service.getLunchTypes()` 
    and can be used to fulfill the task.
    To add the created view elements to the form you can use 
    the function `addSelectViewToUi` from the top.
    The id of the container to fill the view elements in is 'task1-lunch'.
*/

// TODO: SOLUTION TASK 1 HERE



// ----- TASK 2 ----------
// ----- TASK 2.1 --------
/*
    TODO: Create a selection input using our new component.
    The label should be 'Home region' and the name 'home-region'.
    The resulting component should provide 2 column with the value data and categories.
    The value data is provided by the function `Service.getRegionsByCountryChDeAt()`, 
    the categories are provided by the function `Service.getCountriesChDeAt()` 
    and they can be used to fulfill the task.
    To add the created view elements to the form you can use 
    the function `addSelectViewToUi` from the top.
    The id of the container to fill the data view elements is 'task2-home-region'.
*/

// TODO: SOLUTION TASK 2.1 HERE



// ----- TASK 2.2 --------
/*
    TODO: Create a selection input using our new component.
    The label should be 'Birth region' and the name 'birth-region'.
    The resulting component should provide 2 column with the value data and categories.
    The value data is provided by the function `Service.getRegionsByCountry()`, 
    the categories are provided by the function `Service.getCountries()` 
    and they can be used to fulfill the task.
    To add the created view elements to the form you can use 
    the function `addSelectViewToUi` from the top.
    The id of the container to fill the data view elements is 'task2-birth-region'.
*/

// TODO: SOLUTION TASK 2.2 HERE



// ----- TASK 2.3 --------
/*
    TODO: Create a selection input using our new component.
    The label should be 'Birth year' and the name 'birth-year'.
    The resulting component should provide 2 column with the value data and categories.
    The value data is provided by the function `Service.getYearsByDecade()`, 
    the categories are provided by the function `Service.getDecades()` 
    and they can be used to fulfill the task.
    To add the created view elements to the form you can use 
    the function `addSelectViewToUi` from the top.
    The id of the container to fill the data view elements is 'task2-birth-year'.
*/

// TODO: SOLUTION TASK 2.3 HERE




// ------------------------
// Please fill out the question form to give us feedback about how the tasks worked. 
// Please send your solution as a zip back to Ramona Marti on MS Teams.
