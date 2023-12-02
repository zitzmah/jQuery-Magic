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
    $container.append($("<h1>").text("Spring 2017"))
    const $table = $("<table>")
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

    //     Right above your table add an h5 that says 'Spring 2017'
    // Inside the table add a thead element
    // Inside the thead element add two th elements
    // in the first th add the text Day
    // in the second th add the text Classes
    // Create a tr element and add two td elements inside.
    // in the first td add the day Monday
    // in the second td add the classes you are taking ( Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice, etc.)
    // Create more tr elements with tds inside so that you have Monday - Friday and classes each of those days
    // In your main.css file, add a gray 1px solid border around your table, th elements and td elements
    // In your main.css file, add a rule that will center your table on the page

});