// if (typeof jQuery == 'undefined') {
//     console.log('oops! I still have to link my jQuery properly!');
// } else { console.log('I did it! I linked jQuery and this js file!') };

$(() => {
    //************************** */
    //YEAR ONE
    //************************** */

    const $container = $("#container")
    console.log($container)

    const $h1 = $("<h1>")
    console.log($h1)

    $h1.text("Hogwarts")
    $container.append($h1)

    //*********************************** */
    //YEAR TWO
    //*********************************** */

    const $h2 = $("<h2>").text("Haley")
    $container.append($h2)

    const $h3 = $("<h3>").text("Hufflepuff")
    $container.append($h3)

    const $h4 = $("<h4>")
    $h4.addClass("toad").text("Trevor")
    $container.append($h4)

    const $wand = $("<h4>").text("holly wand with unicorn hair core")
    $container.append($wand)

    //**************************************** */
    //YEAR THREE
    //**************************************** */
    //Following what you did in previous years, add the following into an unordered list (with the attribute of storage and a value of trunk):
    const $ul = $("<ul>").attr("storage", "trunk")

    const $butterBeer = $("<li>").text("butter beer")
    const $invisibilityCloak = $("<li>").addClass("secret").text("invisibility cloak")
    const $magicMap = $("<li>").addClass("secret").text("magic map")
    const $timeTurner = $("<li>").addClass("secret").text("time turner")
    const $leash = $("<li>").addClass("toad").text("leash")
    const $bertieBott = $("<li>").text("Bertie Bott\'s Every Flavor [Jelly] Beans")
    $ul.append($butterBeer, $invisibilityCloak, $magicMap, $timeTurner, $leash, $bertieBott)
    $container.append($ul)

    //*************************************** */
    //YEAR FOUR
    //*************************************** */
});