import MealCard from "./MealCard";
import {useState} from "react";
import MenuItemModal from "./ MenuItemModal";

 function Menu({mealData}) {
     const [modalShow, setModalShow]= useState(false)
     const [modalData,setModalData]= useState([])
     console.log(modalShow)
   
console.log(mealData)
            return (
                <div>
                    <h2 id="ourMeals">Please have a look at our lovely selection!</h2>
                    <div id="mealsCenter" className="bootstrapOverride">
                        <h1 className="menuTitles">Appetizers</h1>
                        <div className="meals">
                        <MenuItemModal show={modalShow} handleClose={ () =>setModalShow(false)} MenuItem={modalData}/>
                    {mealData.Appetizers.map(meals => {
                        return(
                            <MealCard setModalData={setModalData} setModalShow={setModalShow} meals={meals} className={"menu"} />
                                )
                    })}</div>
                     <div className="meals">
                      <h1 className="menuTitles">Banh Mi</h1>
                    {mealData["Banh Mi"].map(meals => {
                        return(
                            <MealCard setModalData={setModalData} setModalShow={setModalShow} meals={meals} className={"menu"}/>
                                )
                    })}</div>
                    <div className="meals">
                      <h1 className="menuTitles">Spring Rolls</h1>
                    {mealData["Spring Rolls"].map(meals => {
                        return(
                            <MealCard setModalData={setModalData} setModalShow={setModalShow} meals={meals} className={"menu"}/>
                                )
                    })}</div>
                    <div className="meals">
                     <h1 className="menuTitles">Pho & Noodle Soups</h1>
                    {mealData["Pho & Noodle Soups"].map(meals => {
                        return(
                            <MealCard setModalData={setModalData} setModalShow={setModalShow} meals={meals} className={"menu"}/>
                                )
                    })}</div>
                    <div className="meals">
                     <h1 className="menuTitles">From the Wok</h1>
                    {mealData["From the Wok"].map(meals => {
                        return(
                            <MealCard setModalData={setModalData} setModalShow={setModalShow} meals={meals} className={"menu"}/>
                                )
                    })}</div>
                    <div className="meals">
                     <h1 className="menuTitles">Vermicelli or Rice Platters</h1>
                    {mealData["Vermicelli or Rice Platters"].map(meals => {
                        return(
                            <MealCard setModalData={setModalData} setModalShow={setModalShow} meals={meals} className={"menu"}/>
                                )
                    })}</div>
                    <div className="meals">
                     <h1 className="menuTitles">Fried Rice</h1>
                    {mealData["Fried Rice"].map(meals => {
                        return(
                            <MealCard setModalData={setModalData} setModalShow={setModalShow} meals={meals} className={"menu"}/>
                                )
                    })}</div>
                    <div className="meals">
                     <h1 className="menuTitles">Vegetarians</h1>
                    {mealData["Vegetarians"].map(meals => {
                        return(
                            <MealCard setModalData={setModalData} setModalShow={setModalShow} meals={meals} className={"menu"}/>
                                )
                    })}</div>
                    <div className="meals">
                     <h1 className="menuTitles">Desserts</h1>
                    {mealData["Desserts"].map(meals => {
                        return(
                            <MealCard setModalData={setModalData} setModalShow={setModalShow} meals={meals} className={"menu"}/>
                                )
                    })}</div>
                    <div className="meals">
                     <h1 className="menuTitles">Beverages</h1>
                    {mealData["Beverages"].map(meals => {
                        return(
                            <MealCard setModalData={setModalData} setModalShow={setModalShow} meals={meals} className={"menu"}/>
                                )
                    })}
                    </div>
                    </div>
                </div>
        )}
      
 export default Menu;

 