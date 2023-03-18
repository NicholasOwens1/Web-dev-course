function whosPaying(names) {

    /******Don't change the code above*******/

        //Write your code here.

        // give variable to length of names array
    let listLength = names.length
    // give variable to a random number between 0 and the max number of people in the list
    let randomIndex = (Math.floor((Math.random() * listLength)))
    //

    console.log(`${names[randomIndex]} is going to buy lunch today!`)

    /******Don't change the code below*******/
}


whosPaying(['angela', 'mike', 'john', 'jane'])