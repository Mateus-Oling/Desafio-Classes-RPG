class adventureHero {
    constructor (name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type
    }


attack () {
    let attackDescription = ''

    if (this.type === "mage") {
        attackDescription = "usou magia"
    } else if (this.type === "warrior") {
        attackDescription = "usou espada"
    } else if (this.type === "monk") {
        attackDescription = "usou artes marciais"
    } else if (this.type === "ninja") {
        attackDescription = "usou shuriken"
    } else {
        attackDescription = "atacou"
    }

    console.log(`O ${this.type} atacou usando ${attackDescription}`) 
 }

}
    
const hero = new adventureHero("Mateus El Detonador", 28, "mage")

hero.attack()

