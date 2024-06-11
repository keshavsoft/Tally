let StartFunc1 = async () => {
    console.log("aaaaaaaaa");

};

let StartFunc = async () => {
    var $table = $('#table');
    let jVarLocalData = await readImage();

    $table.bootstrapTable({ data: jVarLocalData });
};

const readImage = () => {
    return new Promise((resolve, reject) => {
        var file = document.getElementById("myfile").files[0];

        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "text/xml");
            let ReturnArray = [];

            reader.onload = function (evt) {
                const parser = new DOMParser();
                const doc = parser.parseFromString(evt.target.result.replaceAll("&#4;", ""), "application/xml");

                let checkboxes = doc.documentElement.querySelectorAll("STOCKITEM");

                checkboxes.forEach((userItem) => {
                    let LoopInsideObject = {};
                    LoopInsideObject.ItemName = userItem.attributes.NAME.value;

                    let LoopInsideRate = userItem.querySelector("OPENINGRATE");

                    if (LoopInsideRate === null === false) {
                        LoopInsideObject.OpeningRate = LoopInsideRate.innerHTML;
                    };

                    ReturnArray.push(LoopInsideObject);
                });

                resolve(ReturnArray);
            }
            reader.onerror = function (evt) {
            };
        };
    });
};

export { StartFunc };