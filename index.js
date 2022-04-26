
//Britain
const USprice=5.81
const PoundBritain=3.59

const bigMacIndex=(USprice/PoundBritain).toFixed(2)
console.log(" big mac index : " +bigMacIndex/100)
const differencePound = ((Math.abs(17.1-bigMacIndex)/bigMacIndex)*100).toFixed(1)
console.log("The British pound is " + differencePound +"% undervalued against the US dollar.")


//Swedeen

const SwedeenPrice=54.00 
const bigMacIndexSwedeen=(USprice/SwedeenPrice).toFixed(2)
console.log("big mac index : " +bigMacIndexSwedeen)

const differencePound1 = ((Math.abs(0.1-bigMacIndex)/bigMacIndex)*100).toFixed(1)
console.log("The Swedish kr is " + differencePound1 +"% undervalued against the US dollar.")

//Switzerland

const priceSwitzerland = 6.50

const bigMacIndexSwitzerland = (USprice/priceSwitzerland).toFixed(2)
console.log("Big Mac Index: " + bigMacIndexSwitzerland)

const differenceSwitzerland = ((Math.abs(1.08 - bigMacIndexSwitzerland)/bigMacIndexSwitzerland)*100).toFixed(1)
console.log("The Swiss franc is " + differenceSwitzerland +"% overvalued against the US dollar.")

//Australia

const AustraliaPrice=6.40 

const bigMacIndexAustralia=(USprice/AustraliaPrice).toFixed(2)
console.log("big mac index : " +bigMacIndexAustralia)

const differenceAustralia = ((Math.abs(1.10-bigMacIndex)/bigMacIndex)*100).toFixed(1)
console.log("The Australian is " + differenceAustralia +"% undervalued against the US dollar.")

//Brazil

const BrazilPrice=22.90

const bigMacIndexBrazil=(USprice/BrazilPrice).toFixed(2)
console.log("big mac index : " +bigMacIndexBrazil)

const differenceBrazil = ((Math.abs(3.94-bigMacIndex)/bigMacIndex)*100).toFixed(1)
console.log("The Brazil reais is " + differenceBrazil +"% undervalued against the US dollar.")

//Croatia

const CroatiaPrice=23.67

const bigMacIndexCroatia=(USprice/CroatiaPrice).toFixed(2)
console.log("big mac index : " +bigMacIndexCroatia)

const differenceCroatia = ((Math.abs(4.07-bigMacIndex)/bigMacIndex)*100).toFixed(1)
console.log("The Croatia kuna is " + differenceCroatia +"% undervalued against the US dollar.")

