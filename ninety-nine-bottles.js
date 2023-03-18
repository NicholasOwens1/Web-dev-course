const bottles = (number) => {
    // while (number > 0) {
    // counts down from given number to zero by one
    for (let i = number; i > -1; i--) {
        if (i < 1) {
            console.log(`0 bottles of beer on the wall, 0 bottles of beer. Go to the store, buy some more. 99 bottles of beer on the wall.`)
        } else {
            if (i < 2 && i > 0) {
                console.log(`Only 1 bottle of beer on the wall, only one bottle of beer. Take one down, pass it around. There's no more bottles of beer on the wall!`)
                continue
            } else {
                if (i < 2 && i > 0) {
                    continue
                }
            }
            console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down, pass it around, ${i - 1} bottles of beer on the wall`)
        }
    }
}


bottles(99)