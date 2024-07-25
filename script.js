    // Global variables
    const presentDate = new Date(); const currentDate = presentDate/(1000*60*60*24);

    // birthday and Name Holiday
    let tomorow = new Date(presentDate); tomorow.setDate(presentDate.getDate()+1);

    // SLOTS DATA OF FOOD
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);

    // CLEAR TEXT
    function clearText(searchButton, searchBar) {
        let searchButton0 = document.getElementById(searchButton);
        searchButton0.addEventListener("click", function(event) { 
        event.preventDefault();
        let searchingBar = document.getElementById(searchBar);
        if (searchingBar) {
            searchingBar.value = ""; // reset of text field
            }   
        });
    }

    // SEARCH FOOD
    let searchButton = document.getElementById("search_button"); searchButton.addEventListener("click", function (event) {
        event.preventDefault();
        let input = document.getElementById("search_bar").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        let output = document.createElement("p");
        let found = false; // Reset found for each search attempt
        
        data.forEach(function (slotSearch) {
            let searchByWord = slotSearch.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            if (input === "all") {
                let output = document.createElement("p");
                output.textContent = `${slotSearch.name}: spotřebujte do ${slotSearch.date.toLocaleDateString("en-GB")}`;
                output.style.color = "black";
                output.style.marginLeft = "3px";
                output.style.marginTop = "3px";
                output.style.marginBottom = "3px";
                document.querySelector("#white_array").appendChild(output);
                found = true;
            }
            if (searchByWord.includes(input) && input.length > 2) {
                let output = document.createElement("p");
                if (slotSearch.date / (1000 * 60 * 60 * 24) >= currentDate) {
                    output.textContent = `${slotSearch.name}: spotřebujte do ${slotSearch.date.toLocaleDateString("en-GB")}`;
                    output.style.color = "black";
                    output.style.marginLeft = "3px";
                    output.style.marginTop = "3px";
                    output.style.marginBottom = "3px";
                    document.querySelector("#white_array").appendChild(output);
                    found = true;
                }
                else if (slotSearch.date / (1000 * 60 * 60 * 24) < currentDate) {
                    output.textContent = `${slotSearch.name}: potravina je prošlá.`;
                    output.style.color = "black";
                    output.style.marginLeft = "3px";
                    output.style.marginTop = "3px";
                    output.style.marginBottom = "3px";
                    document.querySelector("#white_array").appendChild(output);
                    found = true;
                } 
            } 
        })

        if (!found) {
            output.textContent = "Požadovaná potravina není v databázi!";
            output.style.color = "red";
            output.style.margin = 0;
            output.style.marginLeft = "3px";
            output.style.marginTop = "3px";
            output.style.marginBottom = "3px";
            document.querySelector("#white_array").appendChild(output);
        }
    })

    clearText("search_button", "search_bar")

})
.catch(error => console.error('Error loading JSON data:', error));

console.log(currentDate)
let slotDate = "07.12.2024"/(1000*60*60*24);
console.log(slotDate)






    // // CLEAR BUTTON
    // function clearButton(buttClear, whiteArray) {
    //     let cleanButton = document.getElementById(buttClear);
    //     cleanButton.addEventListener("click", function(event){ 
    //     event.preventDefault();
    //     let whiteArr = document.querySelector(whiteArray);
    //     while (whiteArr.firstChild) {
    //         whiteArr.removeChild(whiteArr.firstChild);
    //         }
    //     });    
    // }
    // clearButton("butt_clear", "#white_array")
    // clearButton("butt_clear2", "#white_array2")


    // // FOOD CHECKER
    // let foodSearched = false;

    // let expirationDateChecker = function(slot) {
    //     let result = Math.ceil(slot.date / (1000 * 60 * 60 * 24) - currentDate);
    //     let codeToImport = document.createElement("p");
    //         if (result < 0 && !isNaN(result)) {
    //             codeToImport.textContent  = `${slot.name}: potravina je prošlá!`;
    //             codeToImport.style.color = "rgb(106, 106, 70)";
    //             codeToImport.style.fontSize = "17px";
    //             codeToImport.style.fontWeight = "bold";
    //             codeToImport.style.lineHeight = "10px";
    //             document.querySelector(".passed").appendChild(codeToImport);
    //             foodSearched = true
    //         } else if(result === 0) {
    //             codeToImport.textContent = `${slot.name}: datum spotřeby dnes končí!!!`;
    //             codeToImport.style.color = "red";
    //             codeToImport.style.fontSize = "17px";
    //             codeToImport.style.fontWeight = "bold";
    //             codeToImport.style.lineHeight = "10px";
    //             document.querySelector(".today").appendChild(codeToImport);
    //             foodSearched = true  
    //         } else if(result > 0 && result < 4) {
    //             codeToImport.textContent  = `${slot.name}: datum spotřeby končí za méně než 3 dny!`;
    //             codeToImport.style.color = "#EF8C1C";
    //             codeToImport.style.fontSize = "17px";
    //             codeToImport.style.fontWeight = "bold";
    //             codeToImport.style.lineHeight = "10px";
    //             document.querySelector(".three_days").appendChild(codeToImport);
    //             foodSearched = true
    //         } else if(result > 3 && result < 8) {
    //             codeToImport.textContent = `${slot.name}: datum spotřeby do týdne končí.`;
    //             codeToImport.style.fontSize = "17px";
    //             codeToImport.style.fontWeight = "bold";
    //             codeToImport.style.lineHeight = "10px";
    //             codeToImport.style.marginLeft = "24px";
    //             document.querySelector(".week").appendChild(codeToImport);
    //             foodSearched = true;
    //         } 
    //     }

    // data.forEach(slot => {
    //     if (expirationDateChecker(slot)) {
    //     }
    // });

    // codeToImport_x = document.getElementById("p_expiration_none");
    // if(!foodSearched) { 
    //     codeToImport_x.textContent = `V databázi není žádná potravina, které by končilo datum spotřeby za méně než týden.`;
    //     codeToImport_x.style.marginBottom = "-1px";
    // }

    // // food recipes
    // const foodRecives = [
    //     {   name: "česneková pomazánka",
    //         ingredients: ["česnek", "majonéza", "eidam"],
    //         procedure: "nastrouhej sýr a smýchej s majonézou v podobném poměru a přidej nastrouhaný česnek"
    //     }, 
    //     {   name: "Tofu s fazolemi a rýží",
    //         ingredients: ["cibule","tofu", "rýže", "fazole",],
    //         procedure: "na jemno nakrájenou cibuli dej vařit na pánev s olejem, pak přidej fazole a chvíli povař, pak dej na kostičky nakrájené tofu a dovař a nakonec zamíchem s uvařenou řýží."
    //     }, 
    // ]

    // let searchButton2 = document.getElementById("search_button2"); searchButton2.addEventListener("click", function (event) {
    //     event.preventDefault();
    //     let input = document.getElementById("search_bar2").value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    //     let ingredientsToSearch = input.split(',').map(i => i.trim()); // conversion to string, removing gaps
    //     let results = []; // Field for collecting results
        
    //     foodRecives.forEach(recipe => {
    //         let recipeIngredientsNormalized = recipe.ingredients.map(ingredient => ingredient.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
    //         if (ingredientsToSearch.every(ingredient => recipeIngredientsNormalized.includes(ingredient))) { //verifies whether all ingredients from the search field are included in the recipe
    //             results.push(recipe.name); // Adding the name of the recipe to the results field
    //         }
    //     });
        
    //     if (results.length > 0) {
    //         let output = document.createElement("p");
    //         output.textContent = results;
    //         output.style.color = "black";
    //         output.style.margin = 0;
    //         output.style.marginLeft = "3px";
    //         output.style.marginTop = "3px";
    //         output.style.marginBottom = "3px";
    //         document.querySelector("#white_array2").appendChild(output);
    //     } else {
    //         let output = document.createElement("p");
    //         output.textContent = `Žádné recepty neobsahují současně zadané suroviny.`;
    //         output.style.color = "red";
    //         output.style.margin = "0px";
    //         output.style.marginLeft = "3px";
    //         output.style.marginTop = "3px";
    //         output.style.marginBottom = "3px";
    //         document.querySelector("#white_array2").appendChild(output);
    //     }
    // });
    // clearText("search_button2", "search_bar2")


    // // SOLITARY FOODS
    // const solitaryFoods = {
    //     milk_eggs: ["mléko", "romadůr", "vejce"],
    //     cans_jars: ["sklenice", "konzerva"],
    //     spreads: ["humus"],
    // }

    // let solitaryFoodsListName = [];
    // let solitaryFoodsListDate = [];
    // for (let slot of data) {
    //     for (let category in solitaryFoods) {
    //         if (solitaryFoods[category].some(food => slot.name.includes(food))) {
    //             solitaryFoodsListName.push(slot.name);
    //             solitaryFoodsListDate.push(slot.date);
    //         }
    //     }
    // }

    // let combinedList = solitaryFoodsListName.map((name, index) => {
    //     return { name, date: solitaryFoodsListDate[index] };
    // });
    // combinedList.sort((a, b) => a.name.localeCompare(b.name, "cs"));
    // solitaryFoodsListName = combinedList.map(item => item.name);
    // solitaryFoodsListDate = combinedList.map(item => item.date);

    // let whiteArray3 = document.getElementById("white_array3");
    // for (let i = 0; i < solitaryFoodsListName.length; i++) {
    //     const foodItem = document.createElement("p");
    //     // foodItem.textContent = `${solitaryFoodsListName[i]}: spotřebujte do ${solitaryFoodsListDate[i].toLocaleDateString("en-GB")}`;
    //     foodItem.style.margin = "3.5px";
    //     foodItem.style.marginLeft = "95px";
    //     foodItem.style.fontSize = "18px";
    //     foodItem.style.textAlign = "justify";

    //     const foodName = document.createElement("span");
    //     foodName.textContent = solitaryFoodsListName[i];
    //     foodName.style.fontWeight = "bold"; 
        
    //     const foodDate = document.createElement("span");
    //     foodDate.textContent = `: spotřebujte do ${new Date(solitaryFoodsListDate[i]).toLocaleDateString("en-GB")}`;

    //     if (solitaryFoods.milk_eggs.includes(solitaryFoodsListName[i])) {
    //         foodItem.style.color = "#338DFF";
    //     } else if (solitaryFoods.cans_jars.includes(solitaryFoodsListName[i])) {
    //         foodItem.style.color = "#B03A2E";
    //     } else if (solitaryFoods.spreads.includes(solitaryFoodsListName[i])) {
    //         foodItem.style.color = "#FFA233";
    //     }
    //     whiteArray3.appendChild(foodItem);
    //     foodItem.appendChild(foodName);
    //     foodItem.appendChild(foodDate);
    // }





    // // CURRENT DATE 
    // const currentDateTime = new Date();

    // let seconds = currentDateTime.getSeconds();
    // let minute = currentDateTime.getMinutes();
    // let hour = currentDateTime.getHours();
    // let days = currentDateTime.getDate();
    // let day = currentDateTime.getDay();
    // let month = currentDateTime.getMonth()+1;
    // let year = currentDateTime.getFullYear();

    // let daysOfTheWeek = ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"];
    // let m = "";

    // if(minute < 10) {
    //     m = 0}

    // let dateTime = document.getElementById("date_time");
    //     dateTime.textContent = `Dnes je ${days}/${month}/${year}, ${daysOfTheWeek[day]}, ${hour}:${m}${minute}`

   
    // // adding recipe clicks
    // // sort food checker