import MealCard from "./MealCard";
import {useState,useEffect} from "react";


function OnlineOrdering({mealData}) {
    const [cartContents,setCartContents]= useState([])
    const [cartTotal,setCartTotal]= useState([])
    const [chosenCategory,setChosenCategory]= useState('')

    function getSpecificMenu(){
        if (chosenCategory){
            return(
            mealData[chosenCategory].map(meals => {return(  <MealCard addToCart={addToCart} meals={meals} className={"onlineOrdering"} /> )})
        )} else { return( <></> )}
        }

    const totalPrice = () =>{
        let totalValue = 0;
        for(let i = 0; i < cartContents.length; i++){
           totalValue += cartContents[i].price;   
        }
        setCartTotal(totalValue)
    }
    console.log('total:',)

    function addToCart(meal){
    setCartContents([...cartContents, meal]); 
    }

    function removeFromCart(meal){
        let fullCart = [...cartContents];
        fullCart = fullCart.filter((item) => item.id !== meal.id)
        setCartContents(fullCart)
    }
 console.log()
console.log(cartTotal)

      useEffect(()=> {
        totalPrice();},
        [cartContents]);

    return (
        <div id="onlineOrderBox" className="bootstrapOverride">
            <div id="menuDisplay" >
                <div id="categoryDisplay" >
                    <h1>Categories</h1>
                    {Object.keys(mealData).map(category => {
                    return(
                    <ul key={category.id} id="categoryChoose" onClick={() => setChosenCategory(category)}>
                        {category}
                    </ul>
                    )
                })}
                </div>
                <div id="mealsDisplay">
                <h1>Our Menu</h1> <hr/>
                <h2>{chosenCategory}</h2>
                <div id="menuSpace">
                   {getSpecificMenu()} 
                </div>
                </div>
                </div>
                
            <div id="cart">
                <h1>My Order</h1>
                <div id="cartMealsSpace">
                {cartContents.map(meal => {
                    return(
                        <MealCard removeFromCart={removeFromCart} className={"inCart"} meals={meal}/> 
                    )
                })}
                </div> 
                <div id="cartPricing">
                    <div className="prices">
                       <h2 style={{marginRight: "8vw", marginLeft: "3vw",fontSize: "20px"}}>SubTotal:</h2> <h2 style={pricingStyle}>${cartTotal}</h2> 
                    </div>
                    <div className="prices" >
                       <h2 style={{marginRight: "10vw", marginLeft: "3vw",fontSize: "20px"}}>Taxes:</h2> <h2 style={pricingStyle}>${cartTotal * .08}</h2>
                    </div> <hr style={{width: "90%", color: "black", marginLeft: "3vw", marginBottom: "18px", display: "block",height: "2px"}}/>
                    <div className="prices" style={{fontSize: "revert"}}>
                        <h2 style={{marginRight: "10vw", marginLeft: "3vw",fontSize: "20px",marginTop: "-1vh"}}><b>Total</b></h2> <h2 style={lastPriceStyle}>${cartTotal * .08 + cartTotal}</h2>
                    </div>
                </div>
                </div>
        </div>
     );
}

export default OnlineOrdering;
const pricingStyle={
    right:"0",
    marginRight: "10px",
    fontSize: "revert"
}
const lastPriceStyle={
    marginTop: "-1vh",
    right:"0",
    marginRight: "10px",
    fontSize: "revert"
}