import { StartFunc as StartFuncClickFunc } from "./clickFunc.js";

let StartFunc = () => {
    let jVarLocalCustomerNameInputId = "ButtonShowId";
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNameInputId);

    jVarLocalHtmlId.addEventListener("click", StartFuncClickFunc);
};

StartFunc();