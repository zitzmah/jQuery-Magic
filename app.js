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
    const $ul = $("<ul>").attr("storage", "trunk");

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
    const $semester = $("<h1>").text("Spring 2017")
    $container.append($semester).before($table)
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

    //************************************* */
    //YEAR SIX
    //************************************* */

    // Nosey roommate alert! hide (use jQuery method hide) to hide all your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
    $(".secret").hide("slow").delay(2000)

    // Nosey roommate falls asleep 2 seconds later (chain the jQuery method delay on your hide method (give argument of at least 2000) to prevent showing your secret elements too soon.
    // Use jQuery method show to reveal all of your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
    $(".secret").show("slow")
    // Accident! You transmogrified your pet's leash into half cabbage
    // add the class cabbage to your pet's leash. Do not replace your pet's leash's original class. Your pet, which also has the same class should remain unaffected
    $leash.addClass("cabbage")
    // Fix your pet's leash by removing the class of cabbage (be sure to keep your pet's leash's original class)
    $leash.removeClass("cabbage")

    /******************************************** */
    //YEAR SEVEN
    /******************************************** */
    $semester.text("Fall 2018")
    // Celebrate by buying more butter beer! Append a list item with the text 'Butter beer' as the first list item inside your unordered list with the value of trunk
    $ul.prepend($butterBeer)
    // Whoops! You broke your trunk when you stood on it while singing karaoke. Get a new storage container for your stuff; replace the unodered list's property of trunk with a new property of chest
    $ul.attr("storage", "chest")
    console.log($ul)

    // Add some CSS to your page. Feel free to experiment and make this page your own
    // Take a screenshot of your page and add it to your homework folder

});