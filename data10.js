const fs = require('fs')

const loadInfo = () => {
    try {
        const dataBuffer = fs.readFileSync('data10.json').toString()
        return JSON.parse(dataBuffer)
    } catch (e) {
        return []
    }
}


const saveData = (allData) => {
    const saveDataJSON = JSON.stringify(allData, null , 2)
    fs.writeFileSync('data10.json', saveDataJSON)
}


const addPerson = (id, fname, lname, age, city) => {
    const allData = loadInfo()
    const duplicatedData = allData.filter((obj) => {
        return obj.id === id
    })
    if (duplicatedData.length === 0) {
        allData.push({
            id: id,
            fname: fname,
            lname: lname,
            age: age,
            city: city
        })
        saveData(allData)
        console.log("You have successfully added a new person")
    } else {
        console.log("Error: ID already exists")
    }
}


const readData = (id) => {
    const allData = loadInfo()
    const itemNeeded = allData.find((obj) => {
        return obj.id === id
    })
    if (itemNeeded) {
        console.log(itemNeeded)
    } else {
        console.log("Error: ID not found")
    }
}

const listData = () => {
    const allData = loadInfo()
    if (allData.length === 0) {
        console.log("No data found")
        return
    }
    allData.forEach((obj) => {
        console.log(`ID: ${obj.id} | Name: ${obj.fname} ${obj.lname} | Age: ${obj.age} | City: ${obj.city}`)
    })
}

const deleteData = (id) => {
    const allData = loadInfo()
    const dataToKeep = allData.filter((obj) => {
        return obj.id !== id
    })
    saveData(dataToKeep)
    console.log("you have successfully deleted an item")
}

const deleteAll = () => {
    saveData([])
    console.log("you have successfully deleted all data")
}

const listSummary = () => {
    const allData = loadInfo()
    if (allData.length === 0) {
        console.log("No data found")
        return
    }
    console.log("--- Full Name and City Summary ---")
    allData.forEach((obj) => {
        console.log(`Full Name: ${obj.fname} ${obj.lname} | City: ${obj.city}`)
    })
}
module.exports = {
    addPerson,
    readData,
    listData,
    deleteData,
    deleteAll,
    listSummary
}