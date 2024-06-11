const StartFunc = () => {
    let jVarLocalHtmlId = "HomeId";
    let jVarLocalCreateFolderButtonId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCreateFolderButtonId === null === false) {
        jVarLocalCreateFolderButtonId.addEventListener("click",async () => {
            await Neutralino.app.exit();
        });
    };
};

StartFunc();
