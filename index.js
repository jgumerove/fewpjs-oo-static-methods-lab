class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    let firstWord = this.capitalize(string).split(" ")[0]
    let words = string.split(" ").slice(1)
    let final = words.map(word => {
      if(word === "the" || word === "a" || word === "an" || word === "but" || word === "of" || word === "and" || word ==="for" || word === "at" || word === "by" || word === "from") {
        return word
      } else {
        return this.capitalize(word)
      }
    })
    return (firstWord + " " + final.join(" "))
  }

}


