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
    const $table = $("<table>")
    $container.append($("<h1>").text("Spring 2017")).before($table)
    const $thead = $("<thead>")
    const $th1 = $("<th>").text("Day")
    const $th2 = $("<th>").text("Classes")
    $thead.append($th1, $th2)
    $table.append($thead)

    const $tr1 = $("<tr>")
    const $tr2 = $("<tr>")
    const $tr3 = $("<tr>")
    const $tr4 = $("<tr>")
    const $tr5 = $("<tr>")

    const $monday = $("<td>").text("Monday")
    const $tuesday = $("<td>").text("Tuesday")
    const $wednesday = $("<td>").text("Wednesday")
    const $thursday = $("<td>").text("Thursday")
    const $friday = $("<td>").text("Friday")

    const $monClasses = $("<td>").text("Herbology, Divination")
    const $tuesClasses = $("<td>").text("History of Magic, Charms")
    const $wedClasses = $("<td>").text("Potions, Transfiguration")
    const $thursClasses = $("<td>").text("Defense Against the Dark Arts, Quidditch Practice")
    const $friClasses = $("<td>").text("Care of Magical Creatures, Alchemy")

    $tr1.append($monday, $monClasses)
    $tr2.append($tuesday, $tuesClasses)
    $tr3.append($wednesday, $wedClasses)
    $tr4.append($thursday, $thursClasses)
    $tr5.append($friday, $friClasses)


    $table.append($tr1, $tr2, $tr3, $tr4, $tr5)

    $container.append($table)

    /*********************************** */
    //YEAR FIVE
    /*********************************** */

    // Break your wand! (select the element that contains your wand and remove it)
    $wand.remove()
    // Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
    $butterBeer.remove()
    // Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
    const $newWand = $("<h4>").text("walnut wand with thestral tail hair").css({ "color": "indigo" })
    $container.append($newWand)
    $h4.after($newWand)
    // Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)
    $h4.remove()
    $('head').append($h4)
    // Have your pet come back (remove your pet from the DOM, put it back in its original location)
    $h4.remove()
    $container.append($h4)
    $h3.after($h4)

});