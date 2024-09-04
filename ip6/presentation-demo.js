import {
    SelectComponentByCallbacks,
    SelectComponentByTableValues,
    pageCss,
} from "https://fhnw-ramonamarti.github.io/Kolibri/src/kolibri/projector/selectComponent/selectComponent.js";
import * as Service from "./userTest/dataService.js";
import { tableContinentToCity } from "https://fhnw-ramonamarti.github.io/Kolibri/src/examples/selectComponent/DataService.js";

// load style for new component
const style = document.createElement("style");
style.textContent = pageCss;
document.querySelector("head").append(style);


const getYearsByDecade = (...decades) => {
    const decadeStarts = decades.map(decade => decade.slice(0, 3));
    const data         = [...Array(70).keys()].map((e) => e + 1940 + "");
    return data.filter((e) => decadeStarts.length === 0 || decadeStarts.includes(e.slice(0, 3)));
};

const getDecades = () => [...Array(7).keys()].map((e) => e * 10 + 1940 + "'s");



// ----- gender --------------------------------
const selectAttribute = {
    name : "gender",
    label: "Gender",
};
const columnServiceCb = [
    () => ["male", "female", "divers", "none"],
];
const selectComponent = SelectComponentByCallbacks(
    selectAttribute,
    [...columnServiceCb]
).getComponentView();

const componentGender = document.getElementById("gender");
componentGender.append(selectComponent);

// ----- gender required --------------------------------
const selectAttribute1_2 = {
    name      : "required",
    label     : "Gender required",
    isRequired: true,
};
const selectComponent1_2 = SelectComponentByCallbacks(
    selectAttribute1_2,
    [...columnServiceCb]
).getComponentView();

const componentForm      = document.getElementById("required");
componentForm.append(selectComponent1_2);

const submit     = document.createElement("button");
submit.innerText = "Submit";
componentForm.append(submit);

// ----- gender disabled --------------------------------
const selectAttribute1_3 = {
    name      : "disabled",
    label     : "Gender disabled",
    isDisabled: true,
};
const selectComponent1_3 = SelectComponentByCallbacks(
    selectAttribute1_3,
    [...columnServiceCb]
).getComponentView();

const disabledComponent  = document.getElementById("disabled");
disabledComponent.append(selectComponent1_3);

// ----- country without selection change --------------------------------
const selectAttribute2 = {
    name : "country",
    label: "Country",
};
const tableData = [
    ['Asia', { value: 'AF', label: 'Afghanistan' }], ['Europe', { value: 'AL', label: 'Albania' }], ['Africa', { value: 'DZ', label: 'Algeria' }], ['Oceania', { value: 'AS', label: 'American Samoa' }], ['Europe', { value: 'AD', label: 'Andorra' }], ['Africa', { value: 'AO', label: 'Angola' }], ['North America', { value: 'AI', label: 'Anguilla' }], ['Antarctica', { value: 'AQ', label: 'Antarctica' }], ['North America', { value: 'AG', label: 'Antigua and Barbuda' }], ['South America', { value: 'AR', label: 'Argentina' }], ['Asia', { value: 'AM', label: 'Armenia' }], ['North America', { value: 'AW', label: 'Aruba' }], ['Oceania', { value: 'AU', label: 'Australia' }], ['Europe', { value: 'AT', label: 'Austria' }], ['Asia', { value: 'AZ', label: 'Azerbaijan' }], ['North America', { value: 'BS', label: 'Bahamas' }], ['Asia', { value: 'BH', label: 'Bahrain' }], ['Asia', { value: 'BD', label: 'Bangladesh' }], ['North America', { value: 'BB', label: 'Barbados' }], ['Europe', { value: 'BY', label: 'Belarus' }], ['Europe', { value: 'BE', label: 'Belgium' }], ['North America', { value: 'BZ', label: 'Belize' }], ['Africa', { value: 'BJ', label: 'Benin' }], ['North America', { value: 'BM', label: 'Bermuda' }], ['Asia', { value: 'BT', label: 'Bhutan' }], ['South America', { value: 'BO', label: 'Bolivia' }], ['Europe', { value: 'BA', label: 'Bosnia and Herzegovina' }], ['Africa', { value: 'BW', label: 'Botswana' }], ['South America', { value: 'BR', label: 'Brazil' }], ['North America', { value: 'VG', label: 'British Virgin Islands' }], ['Asia', { value: 'BN', label: 'Brunei' }], ['Europe', { value: 'BG', label: 'Bulgaria' }], ['Africa', { value: 'BF', label: 'Burkina Faso' }], ['Africa', { value: 'BI', label: 'Burundi' }], ['Asia', { value: 'KH', label: 'Cambodia' }], ['Africa', { value: 'CM', label: 'Cameroon' }], ['North America', { value: 'CA', label: 'Canada' }], ['Africa', { value: 'CV', label: 'Cape Verde' }], ['North America', { value: 'KY', label: 'Cayman Islands' }], ['Africa', { value: 'CF', label: 'Central African Republic' }], ['Africa', { value: 'TD', label: 'Chad' }], ['South America', { value: 'CL', label: 'Chile' }], ['Asia', { value: 'CN', label: 'China' }], ['Asia', { value: 'CX', label: 'Christmas Island' }], ['Asia', { value: 'CC', label: 'Cocos Islands' }], ['South America', { value: 'CO', label: 'Colombia' }], ['Africa', { value: 'KM', label: 'Comoros' }], ['Oceania', { value: 'CK', label: 'Cook Islands' }], ['North America', { value: 'CR', label: 'Costa Rica' }], ['Europe', { value: 'HR', label: 'Croatia' }], ['North America', { value: 'CU', label: 'Cuba' }], ['North America', { value: 'CW', label: 'Curacao' }], ['Europe', { value: 'CY', label: 'Cyprus' }], ['Europe', { value: 'CZ', label: 'Czech Republic' }], ['Africa', { value: 'CD', label: 'Democratic Republic of the Congo' }], ['Europe', { value: 'DK', label: 'Denmark' }], ['Africa', { value: 'DJ', label: 'Djibouti' }], ['North America', { value: 'DM', label: 'Dominica' }], ['North America', { value: 'DO', label: 'Dominican Republic' }], ['South America', { value: 'EC', label: 'Ecuador' }], ['Africa', { value: 'EG', label: 'Egypt' }], ['North America', { value: 'SV', label: 'El Salvador' }], ['Africa', { value: 'GQ', label: 'Equatorial Guinea' }], ['Africa', { value: 'ER', label: 'Eritrea' }], ['Europe', { value: 'EE', label: 'Estonia' }], ['Africa', { value: 'ET', label: 'Ethiopia' }], ['South America', { value: 'FK', label: 'Falkland Islands' }], ['Europe', { value: 'FO', label: 'Faroe Islands' }], ['Oceania', { value: 'FJ', label: 'Fiji' }], ['Europe', { value: 'FI', label: 'Finland' }], ['Europe', { value: 'FR', label: 'France' }], ['Oceania', { value: 'PF', label: 'French Polynesia' }], ['Africa', { value: 'GA', label: 'Gabon' }], ['Africa', { value: 'GM', label: 'Gambia' }], ['Asia', { value: 'GE', label: 'Georgia' }], ['Europe', { value: 'DE', label: 'Germany' }], ['Africa', { value: 'GH', label: 'Ghana' }], ['Europe', { value: 'GI', label: 'Gibraltar' }], ['Europe', { value: 'GR', label: 'Greece' }], ['North America', { value: 'GL', label: 'Greenland' }], ['North America', { value: 'GD', label: 'Grenada' }], ['Oceania', { value: 'GU', label: 'Guam' }], ['North America', { value: 'GT', label: 'Guatemala' }], ['Europe', { value: 'GG', label: 'Guernsey' }], ['Africa', { value: 'GN', label: 'Guinea' }], ['Africa', { value: 'GW', label: 'Guinea-Bissau' }], ['South America', { value: 'GY', label: 'Guyana' }], ['North America', { value: 'HT', label: 'Haiti' }], ['North America', { value: 'HN', label: 'Honduras' }], ['Asia', { value: 'HK', label: 'Hong Kong' }], ['Europe', { value: 'HU', label: 'Hungary' }], ['Europe', { value: 'IS', label: 'Iceland' }], ['Asia', { value: 'IN', label: 'India' }], ['Asia', { value: 'ID', label: 'Indonesia' }], ['Asia', { value: 'IR', label: 'Iran' }], ['Asia', { value: 'IQ', label: 'Iraq' }], ['Europe', { value: 'IE', label: 'Ireland' }], ['Europe', { value: 'IM', label: 'Isle of Man' }], ['Asia', { value: 'IL', label: 'Israel' }], ['Europe', { value: 'IT', label: 'Italy' }], ['Africa', { value: 'CI', label: 'Ivory Coast' }], ['North America', { value: 'JM', label: 'Jamaica' }], ['Asia', { value: 'JP', label: 'Japan' }], ['Europe', { value: 'JE', label: 'Jersey' }], ['Asia', { value: 'JO', label: 'Jordan' }], ['Asia', { value: 'KZ', label: 'Kazakhstan' }], ['Africa', { value: 'KE', label: 'Kenya' }], ['Oceania', { value: 'KI', label: 'Kiribati' }], ['Asia', { value: 'KW', label: 'Kuwait' }], ['Asia', { value: 'KG', label: 'Kyrgyzstan' }], ['Asia', { value: 'LA', label: 'Laos' }], ['Europe', { value: 'LV', label: 'Latvia' }], ['Asia', { value: 'LB', label: 'Lebanon' }], ['Africa', { value: 'LS', label: 'Lesotho' }], ['Africa', { value: 'LR', label: 'Liberia' }], ['Africa', { value: 'LY', label: 'Libya' }], ['Europe', { value: 'LI', label: 'Liechtenstein' }], ['Europe', { value: 'LT', label: 'Lithuania' }], ['Europe', { value: 'LU', label: 'Luxembourg' }], ['Asia', { value: 'MO', label: 'Macau' }], ['Europe', { value: 'MK', label: 'Macedonia' }], ['Africa', { value: 'MG', label: 'Madagascar' }], ['Africa', { value: 'MW', label: 'Malawi' }], ['Asia', { value: 'MY', label: 'Malaysia' }], ['Asia', { value: 'MV', label: 'Maldives' }], ['Africa', { value: 'ML', label: 'Mali' }], ['Europe', { value: 'MT', label: 'Malta' }], ['Oceania', { value: 'MH', label: 'Marshall Islands' }], ['Africa', { value: 'MR', label: 'Mauritania' }], ['Africa', { value: 'MU', label: 'Mauritius' }], ['Africa', { value: 'YT', label: 'Mayotte' }], ['North America', { value: 'MX', label: 'Mexico' }], ['Oceania', { value: 'FM', label: 'Micronesia' }], ['Europe', { value: 'MD', label: 'Moldova' }], ['Europe', { value: 'MC', label: 'Monaco' }], ['Asia', { value: 'MN', label: 'Mongolia' }], ['Europe', { value: 'ME', label: 'Montenegro' }], ['North America', { value: 'MS', label: 'Montserrat' }], ['Africa', { value: 'MA', label: 'Morocco' }], ['Africa', { value: 'MZ', label: 'Mozambique' }], ['Asia', { value: 'MM', label: 'Myanmar' }], ['Africa', { value: 'NA', label: 'Namibia' }], ['Oceania', { value: 'NR', label: 'Nauru' }], ['Asia', { value: 'NP', label: 'Nepal' }], ['Europe', { value: 'NL', label: 'Netherlands' }], ['North America', { value: 'AN', label: 'Netherlands Antilles' }], ['Oceania', { value: 'NC', label: 'New Caledonia' }], ['Oceania', { value: 'NZ', label: 'New Zealand' }], ['North America', { value: 'NI', label: 'Nicaragua' }], ['Africa', { value: 'NE', label: 'Niger' }], ['Africa', { value: 'NG', label: 'Nigeria' }], ['Oceania', { value: 'NU', label: 'Niue' }], ['Asia', { value: 'KP', label: 'North Korea' }], ['Oceania', { value: 'MP', label: 'Northern Mariana Islands' }], ['Europe', { value: 'NO', label: 'Norway' }], ['Asia', { value: 'OM', label: 'Oman' }], ['Asia', { value: 'PK', label: 'Pakistan' }], ['Oceania', { value: 'PW', label: 'Palau' }], ['Asia', { value: 'PS', label: 'Palestine' }], ['North America', { value: 'PA', label: 'Panama' }], ['Oceania', { value: 'PG', label: 'Papua New Guinea' }], ['South America', { value: 'PY', label: 'Paraguay' }], ['South America', { value: 'PE', label: 'Peru' }], ['Asia', { value: 'PH', label: 'Philippines' }], ['Oceania', { value: 'PN', label: 'Pitcairn' }], ['Europe', { value: 'PL', label: 'Poland' }], ['Europe', { value: 'PT', label: 'Portugal' }], ['North America', { value: 'PR', label: 'Puerto Rico' }], ['Asia', { value: 'QA', label: 'Qatar' }], ['Africa', { value: 'CG', label: 'Republic of the Congo' }], ['Africa', { value: 'RE', label: 'Reunion' }], ['Europe', { value: 'RO', label: 'Romania' }], ['Europe', { value: 'RU', label: 'Russia' }], ['Africa', { value: 'RW', label: 'Rwanda' }], ['Africa', { value: 'SH', label: 'Saint Helena' }], ['North America', { value: 'KN', label: 'Saint Kitts and Nevis' }], ['North America', { value: 'LC', label: 'Saint Lucia' }], ['North America', { value: 'MF', label: 'Saint Martin' }], ['North America', { value: 'VC', label: 'Saint Vincent and the Grenadines' }], ['Oceania', { value: 'WS', label: 'Samoa' }], ['Europe', { value: 'SM', label: 'San Marino' }], ['Africa', { value: 'ST', label: 'Sao Tome and Principe' }], ['Asia', { value: 'SA', label: 'Saudi Arabia' }], ['Africa', { value: 'SN', label: 'Senegal' }], ['Europe', { value: 'RS', label: 'Serbia' }], ['Africa', { value: 'SC', label: 'Seychelles' }], ['Africa', { value: 'SL', label: 'Sierra Leone' }], ['Asia', { value: 'SG', label: 'Singapore' }], ['Europe', { value: 'SK', label: 'Slovakia' }], ['Europe', { value: 'SI', label: 'Slovenia' }], ['Oceania', { value: 'SB', label: 'Solomon Islands' }], ['Africa', { value: 'SO', label: 'Somalia' }], ['Africa', { value: 'ZA', label: 'South Africa' }], ['Asia', { value: 'KR', label: 'South Korea' }], ['Africa', { value: 'SS', label: 'South Sudan' }], ['Europe', { value: 'ES', label: 'Spain' }], ['Asia', { value: 'LK', label: 'Sri Lanka' }], ['Africa', { value: 'SD', label: 'Sudan' }], ['South America', { value: 'SR', label: 'Suriname' }], ['Africa', { value: 'SZ', label: 'Swaziland' }], ['Europe', { value: 'SE', label: 'Sweden' }], ['Europe', { value: 'CH', label: 'Switzerland' }], ['Asia', { value: 'SY', label: 'Syria' }], ['Asia', { value: 'TW', label: 'Taiwan' }], ['Asia', { value: 'TJ', label: 'Tajikistan' }], ['Africa', { value: 'TZ', label: 'Tanzania' }], ['Asia', { value: 'TH', label: 'Thailand' }], ['Oceania', { value: 'TL', label: 'Timor-Leste' }], ['Africa', { value: 'TG', label: 'Togo' }], ['Oceania', { value: 'TK', label: 'Tokelau' }], ['Oceania', { value: 'TO', label: 'Tonga' }], ['North America', { value: 'TT', label: 'Trinidad and Tobago' }], ['Africa', { value: 'TN', label: 'Tunisia' }], ['Asia', { value: 'TR', label: 'Turkey' }], ['Asia', { value: 'TM', label: 'Turkmenistan' }], ['North America', { value: 'TC', label: 'Turks and Caicos Islands' }], ['Oceania', { value: 'TV', label: 'Tuvalu' }], ['North America', { value: 'VI', label: 'U.S. Virgin Islands' }], ['Africa', { value: 'UG', label: 'Uganda' }], ['Europe', { value: 'UA', label: 'Ukraine' }], ['Asia', { value: 'AE', label: 'United Arab Emirates' }], ['Europe', { value: 'GB', label: 'United Kingdom' }], ['North America', { value: 'US', label: 'United States' }], ['South America', { value: 'UY', label: 'Uruguay' }], ['Asia', { value: 'UZ', label: 'Uzbekistan' }], ['Oceania', { value: 'VU', label: 'Vanuatu' }], ['Europe', { value: 'VA', label: 'Vatican' }], ['South America', { value: 'VE', label: 'Venezuela' }], ['Asia', { value: 'VN', label: 'Vietnam' }], ['Oceania', { value: 'WF', label: 'Wallis and Futuna' }], ['Africa', { value: 'EH', label: 'Western Sahara' }], ['Asia', { value: 'YE', label: 'Yemen' }], ['Africa', { value: 'ZM', label: 'Zambia' }], ['Africa', { value: 'ZW', label: 'Zimbabwe' }]
].map((e) => [
    e[0],
    {
        value: e[1].value,
        label: `<img src="https://flagsapi.com/${e[1].value}/flat/64.png"> ` + e[1].label,
    },
]);
const selectComponent2 = SelectComponentByTableValues(
    selectAttribute2,
    tableData
).getComponentView();

const componentCountry = document.getElementById("country");
componentCountry.append(selectComponent2);

// ----- year with selection change --------------------------
const selectAttribute2_2 = {
    name                         : "year",
    label                        : "Year",
    isCursorPositionWithSelection: true,
};
const columnServiceCb2_2 = [
    getDecades,
    getYearsByDecade,
];
const selectComponent2_2 = SelectComponentByCallbacks(
    selectAttribute2_2,
    [...columnServiceCb2_2]
).getComponentView();

const yearComponent  = document.getElementById("year");
yearComponent.append(selectComponent2_2);

// ----- city selection 3 columns --------------------------------
const selectAttribute5 = {
    name : "city",
    label: "City",
};
const selectComponent5 = SelectComponentByTableValues(
    selectAttribute5,
    tableContinentToCity
).getComponentView();

const componentCity    = document.getElementById("city");
componentCity.append(selectComponent5);
