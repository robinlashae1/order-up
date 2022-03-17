import React from "react";

function MealCard({setModalShow,meals,className,addToCart,removeFromCart,setModalData}) {

    const des = meals.description
    const count = 150
    const menuCount = 100
    const menuResults = des.slice(0, menuCount)
    const results = des.slice(0, count)

    function renderDescription(meals,location){
        if (meals.description && location === "menu"){
            return(
                <p id="foodDescription">{`${menuResults}...`}</p>   
                  )
            }if (meals.description && location === "onlineOrdering"){
                return(
                    <p id="oofooddescription">{`${results}...`}</p>   
                )}
    }


    function renderExtras(meals, option){
        if (meals.extras && option === "menu"){
            return(
              meals.extras.map(extra=>{
                  return(
                   <p  >{extra}</p>   
                  )}
              )
        )}
        if (meals.extras && option === "onlineOrdering"){
            return(
                <select>
                    <option>Please Choose an Option</option>
              {meals.extras.map(extra=>{ return(<option>{extra}</option>)})}
                <option>None</option>
                </select>
              )
        }
    }
    if (className === "menu"){
        return (
            <div className="food-div bootstrapOverride" onClick={()=>{setModalShow(true);setModalData(meals)}}>
                <img id="foodImage" src={meals.image} alt={meals.name}/>
                <h3 id="foodname"><b>{meals.name}</b></h3>
                <hr/>
                {renderDescription(meals,"menu")}
                <p id="foodprice">Price: ${meals.price}</p>
                {/* {renderExtras(meals,"menu")} */}
            </div>
        )
    }
    else if (className === "onlineOrdering"){
        return (
            <div className="oofood-div bootstrapOverride">
                <h2 id="oofoodname"><b>{meals.name}</b></h2> <p id="oofoodprice"> ${meals.price}</p>
                <button id="ooAtCButton" onClick={()=> addToCart(meals)}>Add to Cart</button>
                {renderDescription(meals,"onlineOrdering")}<br/>
                {renderExtras(meals,"onlineOrdering")} 
                
            </div>
        )
    }
    else if (className === "inCart"){
        return (
            <div className="icfood-div bootstrapOverride">
                <h2 id="icfoodname"><b>{meals.name}</b></h2> <p id="icfoodprice"> ${meals.price}</p>
                <button id="icrfCButton" onClick={()=> removeFromCart(meals)}>Remove</button>
            </div>
        )
    }
        
}

export default MealCard;