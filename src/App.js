import {useState} from "react";
import { Route, Switch, BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import About from './components/About';
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import OnlineOrdering from "./components/OnlineOrdering";

function App() {
  const [mealData, setMealData] = useState(meals);

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path='/menu'>
            <Menu mealData={mealData}/>
          </Route>
          {/* <Route exact path='/meals'>
            <Meals mealsData={menuData}/>
          </Route> */}
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/onlineOrdering'>
            <OnlineOrdering mealData={mealData}/>
          </Route>
          <Route exact path='/'>
            <HomePage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
const meals = {
   "Appetizers":[
   { "id": 11, "name": "Fried Wontons","price":9, "description": "Deep fried wontons stuffed with pork and shrimp. Served with sweet chili sauce.","image":"https://static.wixstatic.com/media/bd03ff_effea38a2b4d4bd9931a3e3e31accf19~mv2.jpeg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
      { "id": 12, "name": "Grape Leaf Beef","price":11, "description": "Seasoned ground beef wrapped and grilled in grape leaves.","image":"https://static.wixstatic.com/media/bd03ff_6cf47fabbfd94d2d9f836326098e977b~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
      { "id": 13, "name": "Fried Tofu","price":6, "description": "Deep fried tofu coated with chef's house sauce.","image":"https://static.wixstatic.com/media/bd03ff_ea7f5fa2e7b94b9dbf990a29920a37aa~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
      { "id": 14, "name": "Chicken Wings","price":12, "description": "Crispy chicken wings with your choice of flavor.","image":"https://static.wixstatic.com/media/bd03ff_33ad6548f8be4ae4941a3e815033c076~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp","extras": ["Tamarind Sauce", "Salt and Pepper", "Thai Chili Sauce"]},
      { "id": 15, "name": "Summer Rolls Samplers","price":14, "description": "A sampler of fresh shrimp, grilled pork, grilled chicken, and tofu. Served with Peanut Sauce","image":"https://media.istockphoto.com/vectors/camera-icon-vector-id1175387759?k=20&m=1175387759&s=170667a&w=0&h=_yh0Pa5U8zGIn6YHTkm6lv50VCWMSUDosBLgW8bLK08="},
      { "id": 16, "name": "Dumpling Sampler","price": 11, "description": "A sampler of pork, chicken lemongrass, and Spinach Dumplings. (Veggie Dumplings come in fried only) Vegetable Dumplings can only be fried.","image":"https://media.istockphoto.com/vectors/camera-icon-vector-id1175387759?k=20&m=1175387759&s=170667a&w=0&h=_yh0Pa5U8zGIn6YHTkm6lv50VCWMSUDosBLgW8bLK08=","extras":["Steam", "Fried"]},
      { "id": 17, "name": "Pork Spring Rolls","price": 7, "description": "Lightly fried and filled with ground pork, carrots, taro, and onion. Served with Sweet Chili sauce.","image":"https://static.wixstatic.com/media/bd03ff_b5217e29775b424e9aa229c82c8fae6e~mv2.jpeg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
      { "id": 18, "name": "Fresh Summer Rolls","price": 7, "description": "Clear rice paper filled with your choice of protein, lettuce, and vermicelli. Served with Peanut Sauce. VEGETARIAN OPTIONS AVAILABLE","image":"https://static.wixstatic.com/media/bd03ff_465c506dcf2d48da802046b34c4f55b3~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp", "extras": ["Shrimp", "Grilled Chicken", "Grilled Pork,Tofu"]},
      { "id": 19, "name": "Dumplings","price":7, "description": "Served steamed or fried with dumpling sauce.","image":"https://static.wixstatic.com/media/bd03ff_d1478c88eef6443daf7d37368bae42c4~mv2.jpeg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp", "extras": ["Pork and Napa", "Chicken Lemongrass"]},
      { "id": 20, "name": "Fried Veggie Dumplings","price":7, "description": "","image":"https://static.wixstatic.com/media/bd03ff_4e2eab425f804f3a9c98f385c0881c17~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    ],
  "Banh Mi":[
    { "id": 1, "name": "Main Street Special", "description": "Cold cut with Pressed Ham, Pork Sausage and Pork Belly on a soft crunchy roll, with a spread of mayo and pate, cucumber, daikon, jalapeño, and cilantro.","price":11,"image":"https://static.wixstatic.com/media/bd03ff_963d864835874dc6b2631305d923ae6a~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 2, "name": "Cold Cut", "description": "Pressed Ham and Pork Sausage on a soft crunchy roll, with a spread of mayo and pate, cucumber, daikon, jalapeño, and cilantro.","price":10,"image":"https://static.wixstatic.com/media/bd03ff_442e869b354740efa94749d04a83327f~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 3, "name": "Grilled Pork ", "description": "Grilled Pork Banh MI on a soft crunchy roll, with a spread of mayo and pate, cucumber, daikon, jalapeño, and cilantro.","price":11,"image":"https://static.wixstatic.com/media/bd03ff_a4c487f9d1ee4027b59745f1e8f6d1a9~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 4, "name": "Grilled Chicken", "description": "Grilled Chicken Banh Mi on a soft crunchy roll, with a spread of mayo and pate, cucumber, daikon, jalapeño, and cilantro.","price":11,"image":"https://static.wixstatic.com/media/bd03ff_b15cbae0f69640899b0c355c4a99e5b3~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 5, "name": "Fried Tofu","price":10, "description": "Fried Tofu Banh Mi on a soft crunchy roll, with a spread of mayo and pate, cucumber, daikon, jalapeño, and cilantro.","image":"https://static.wixstatic.com/media/bd03ff_b1047249b3a04ce1ae35337f19b59e17~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 6, "name": "Steak ","price":11, "description": "Steak Banh Mi on a soft crunchy roll, with a spread of Mayo and Pate, Fried Onion, Tomato and Cilantro.","image":"https://static.wixstatic.com/media/bd03ff_198c01665b684633b24c4a57cbf405f3~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp", "extras": ["BBQ Steak","Spicy Steak"]},
    { "id": 7, "name": "Grilled Shrimp ","price":12, "description": "Grilled Shrimp banh mi on a soft crunchy roll, with a spread of mayo and pate, cucumber, daikon, and cilantro.","image":"https://static.wixstatic.com/media/bd03ff_24e789b3c288464683afa4c462b6646b~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"}
  ],
  "Spring Rolls":[
    { "id": 8, "name": "Pork Spring Rolls","price":7, "description": "Lightly fried and filled with ground pork, carrots, taro, and onion. Served with Sweet Chili sauce.","image":"https://static.wixstatic.com/media/bd03ff_b5217e29775b424e9aa229c82c8fae6e~mv2.jpeg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
      { "id": 9, "name": "Fresh Summer Rolls","price":7, "description": "Clear rice paper filled with your choice of protein, lettuce, and vermicelli. Served with Peanut Sauce. VEGETARIAN OPTIONS AVAILABLE","image":"https://static.wixstatic.com/media/bd03ff_465c506dcf2d48da802046b34c4f55b3~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"}  
  ],
  "Pho & Noodle Soups":[
    { "id": 21, "name": "Spicy Beef Noodle Soup (Bun Bo Hue)","price":15, "description": "Beef base broth in Lemongrass flavor, comes with beef shank, brisket, tendon and pork sausage.","image":"https://static.wixstatic.com/media/bd03ff_56f326dd8f85491abef8f2d8b51a4237~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp","extras": ["No Tripe No Tendon"]},
    { "id": 22, "name": "Beef Pho Special","price":15, "description": "A combination of raw beef eye round, brisket, beef meatballs, tripe, and tendon.","image":"https://static.wixstatic.com/media/bd03ff_615ffbb11c044b419aebadb144a8724f~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp","extras": ["No Tripe No Tendon"]},
    { "id": 23, "name": "Chicken Pho","price":13, "description": "","image":"https://static.wixstatic.com/media/bd03ff_db1dbd65c8824e70ac9786f4f9ba79d2~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp","extras": ["Grilled Chicken........$3","Grilled Pork........$3","Grilled Shrimp.......$4","Fried Tofu........$2"]},
    { "id": 25, "name": "Vegetables Pho","price":12, "description": "","image":"https://static.wixstatic.com/media/bd03ff_7d844e1da45141b69124e50f9dd4cbcd~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 26, "name": "Tofu Pho","price":12, "description": "","image":"https://media.istockphoto.com/vectors/camera-icon-vector-id1175387759?k=20&m=1175387759&s=170667a&w=0&h=_yh0Pa5U8zGIn6YHTkm6lv50VCWMSUDosBLgW8bLK08="},
    { "id": 27, "name": "Beef Eye Round","price":13, "description": "","image":"https://static.wixstatic.com/media/bd03ff_5ca91c695adc414c91bad90b94578f97~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp", "extras":["Raw Steak On The Side"]},
    { "id": 28, "name": "Brisket","price":13, "description": "","image":"https://static.wixstatic.com/media/bd03ff_35a26def862e44858d243595bdfac9e6~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 29, "name": "Beef Meatballs","price":14, "description": "","image":"https://static.wixstatic.com/media/bd03ff_a5bcc5950dfd46b58f69db34d3013c4f~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 30, "name": "Fish Meatballs","price":13, "description": "","image":"https://static.wixstatic.com/media/bd03ff_a0e2d86fbd824aa7b2e42d25fa2fd0d7~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 31, "name": "Dumpling Noodle Soup","price":15, "description": "","image":"https://static.wixstatic.com/media/bd03ff_cdb2201661c64bfc96f9f5d596b90c1f~mv2.jpeg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp","extras":["Chicken Lemongrass","Pork and Napa"]},
    { "id": 32, "name": "Shrimp Pho","price":14, "description": "","image":"https://static.wixstatic.com/media/bd03ff_1fe219c97d864febad5077cef39d86df~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 33, "name": "Grilled Chicken Pho","price":14, "description": "","image":"https://static.wixstatic.com/media/bd03ff_29057b7c4a80464eab1f09e925f5b672~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"}, 
    { "id": 34, "name": "Grilled Pork Pho","price":14, "description": "","image":"https://media.istockphoto.com/vectors/camera-icon-vector-id1175387759?k=20&m=1175387759&s=170667a&w=0&h=_yh0Pa5U8zGIn6YHTkm6lv50VCWMSUDosBLgW8bLK08="},
    { "id": 35, "name": "Grilled Shrimp Pho","price":15, "description": "","image":"https://media.istockphoto.com/vectors/camera-icon-vector-id1175387759?k=20&m=1175387759&s=170667a&w=0&h=_yh0Pa5U8zGIn6YHTkm6lv50VCWMSUDosBLgW8bLK08="},
    { "id": 36, "name": "Seafood","price":15, "description": "Shrimp, Scallop, Crab sticks, Fishballs, Broccoli, Carrots, and Mushrooms. Pho or Egg Noodle.","image":"https://static.wixstatic.com/media/bd03ff_ba0ca1b3723c44f592c10befe63735b9~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 37, "name": "Beef Stew Noodle","price":15, "description": "","image":"https://media.istockphoto.com/vectors/camera-icon-vector-id1175387759?k=20&m=1175387759&s=170667a&w=0&h=_yh0Pa5U8zGIn6YHTkm6lv50VCWMSUDosBLgW8bLK08="},
    { "id": 38, "name": "Beef Shank Pho","price":14, "description": "","image":"https://media.istockphoto.com/vectors/camera-icon-vector-id1175387759?k=20&m=1175387759&s=170667a&w=0&h=_yh0Pa5U8zGIn6YHTkm6lv50VCWMSUDosBLgW8bLK08="}
  ],
  "From the Wok":[
    { "id": 39, "name": "Eggplants with Minced Pork","price":14, "description": "Minced pork sautéed with ginger, scallions, and dry pepper in garlic sauce.","image":"https://static.wixstatic.com/media/bd03ff_3e9ea7a9d9bd443586304c09daf102de~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 40, "name": "Spicy Lemongrass","price":14, "description": "Hot chili and lemongrass sauce, with bell pepper, carrot, onion, none Spicy available upon request.","image":"https://static.wixstatic.com/media/bd03ff_124ca686ba4f472381cc93ae31faaae6~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp","extras":["Chicken","Beef","Shrimp"]},
    { "id": 41, "name": "Curry","price":14, "description": "Wok-fry with Eggplants, carrots, sweet potatoes and onions in a homemade curry coconut sauce.","image":"https://static.wixstatic.com/media/bd03ff_43b4095aef4e4795921a9f09f32ca5ad~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp","extras":["Chicken","Beef","Shrimp"]},
    { "id": 42, "name": "Claypot","price":14, "description": "Simmered with garlic, onion and Chinese Cabbage and bell pepper in delicious traditional Vietnamese fish sauce and black pepper. Served in ceramic pot.","image":"https://static.wixstatic.com/media/bd03ff_15c1053e24e24c2b9ff4ae599c86ab2e~mv2.jpeg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp","extras":["Chicken","Beef","Shrimp"]},
    { "id": 43, "name": "Beef Stew","price":17, "description": "Braised beef and tendon in five spice seasoning, slow cook with carrot and onion in tomato paste.","image":"https://static.wixstatic.com/media/bd03ff_ad81e3a56ba94f5bad657e35ab92b24c~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp","extras":["Rice","Bread"]},
    { "id": 44, "name": "Fried Egg Noodle","price":17, "description": "Cantonese style soy sauce fried noodles with shrimp, chicken, fish balls, bean sprout, broccoli, carrot, mushrooms and scallions.0000","image":"https://static.wixstatic.com/media/bd03ff_652e6dc1b79d46c98fd4f8e5bf37b8de~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 45, "name": "Shaking Beef","price":18, "description": "Diced flank steak(10oz) marinated in a house sauce, pan fried in shallot and black pepper. Served with lettuce, tomato and red onion.","image":"https://static.wixstatic.com/media/bd03ff_6a0e2209498b4e6eabf482bcc3948750~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 46, "name": "Salt and Pepper Shrimp","price":20, "description": "Coated crispy shrimp with chopped bell pepper, scallions and fried onion sprinkled in homemade salt and pepper flavor.","image":"https://static.wixstatic.com/media/bd03ff_9c8eb428659b47ac97d4daa80d9a24b1~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 47, "name": "Short Ribs with Oyster Sauce","price":17, "description": "Wok Fried in Bell Peppers and Onions with Oyster Sauce and Black Pepper.","image":"https://static.wixstatic.com/media/bd03ff_70e42e90fa374a8cb8ac1b3df05c84b0~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 48, "name": "Mix Veggie in Spicy Black Bean Sauce","price":14, "description": "Your choice of Protien wok-fry with Mixture of delicious Vegetables includes Chinese Cabbage, Bok Choy, Broccoli, Carrot, Mushroom and Cabbage, in Garlic Sauce.","image":"https://media.istockphoto.com/vectors/camera-icon-vector-id1175387759?k=20&m=1175387759&s=170667a&w=0&h=_yh0Pa5U8zGIn6YHTkm6lv50VCWMSUDosBLgW8bLK08=","extras":["Beef","Shrimp"]},
    { "id": 49, "name": "Ginger Chicken","price":16, "description": "Sautéed in scallion and ginger in a house sauce with a touch of wine, accompanied with carrot and mushroom.","image":"https://media.istockphoto.com/vectors/camera-icon-vector-id1175387759?k=20&m=1175387759&s=170667a&w=0&h=_yh0Pa5U8zGIn6YHTkm6lv50VCWMSUDosBLgW8bLK08="},
    { "id": 50, "name": "Seafood Delight","price":22, "description": "Prawns, Scallops, Fish Balls, Calamari, and a mixture of Vegetables, Wok-tossed in a white sauce.","image":"https://static.wixstatic.com/media/bd03ff_ce3fbfa2c9b9432f9bbcbc666be92475~mv2.png/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
  ],
  "Vermicelli or Rice Platters":[
    { "id": 51, "name": "Main Street Special Platter","price":15, "description": "Grilled chicken, pork, and shrimp. Served with a crispy spring roll and vegetables.","image":"https://static.wixstatic.com/media/bd03ff_a35c979399aa4a36af82ca42dee9029e~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp","extras":["Rice","Vermicelli"]},
    { "id": 52, "name": "Pork Spring Roll Platter","price":14, "description": "","image":"https://static.wixstatic.com/media/bd03ff_4b9949ddaa9748adb19cbaf686de9445~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 53, "name": "Fried Tofu Platter","price":13, "description": "","image":"https://static.wixstatic.com/media/bd03ff_602b1db58f2b4d18a8d6789c16a7ff71~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp","extras":["Rice","Vermicelli"]},
    { "id": 54, "name": "Pork Lemongrass","price":14, "description": "","image":"https://static.wixstatic.com/media/bd03ff_ff05e64c23af4e529bc6c02ee20486ce~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 55, "name": "Beef Lemongrass","price":15, "description": "","image":"https://static.wixstatic.com/media/bd03ff_034710b72a694b6c9e66501456d30e6b~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp","extras":["Rice","Vermicelli"]},
    { "id": 56, "name": "Grilled Chicken","price":14, "description": "","image":"https://static.wixstatic.com/media/bd03ff_c6be9d58bd8f460b9c7025b65d553278~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 57, "name": "Grilled Pork","price":14, "description": "","image":"https://static.wixstatic.com/media/bd03ff_860da23380434ad68836584ed7768b9e~mv2.jpeg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp","extras":["Rice","Vermicelli"]},
    { "id": 58, "name": "Grilled Shrimp","price":16, "description": "","image":"https://static.wixstatic.com/media/bd03ff_402fc475e2f1480d9979d6cf0d71011f~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 59, "name": "Grilled Short Ribs","price":16, "description": "","image":"https://static.wixstatic.com/media/bd03ff_30276cca820e4f1f82a1742cd170889c~mv2.jpeg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 60, "name": "Pork Chop & Friend Egg","price":16, "description": "","image":"https://static.wixstatic.com/media/bd03ff_05aad9d74ff541a39b524093780fe11d~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 61, "name": "Grape Leaf Beef","price":17, "description": "","image":""}
    // ,
    // { "id": 62, "name": "","price":"", "description": "typicode","image":""}
  ],
  "Fried Rice":[
    { "id": 63, "name": "Chicken Fried Rice","price":14, "description": "","image":"https://static.wixstatic.com/media/bd03ff_3d698320688e4479a432dd2b3c6aaed2~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 64, "name": "Beef Fried Rice","price":15, "description": "","image":"https://static.wixstatic.com/media/bd03ff_62a416f13e354e8783a8f06d90f7efd4~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 65, "name": "Tofu & Veggies Fried Rice","price":13, "description": "","image":"https://static.wixstatic.com/media/bd03ff_d854b90b92b64a3ab228ebad253af79c~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 66, "name": "Shrimp Fried Rice","price":15, "description": "","image":"https://static.wixstatic.com/media/bd03ff_c367ec5d89a5453897b45988b7118341~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"}
  ],
  "Vegetarians":[
    { "id": 67, "name": "Spicy Lemongrass With Tofu","price":13, "description": "Hot chili and lemongrass sauce sautéed with Chinese Cabbage, bell pepper and onion.","image":"https://static.wixstatic.com/media/bd03ff_59a5e5d45eac4b6289b9255cda76d058~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 68, "name": "Baby Bok Choy In Garlic Sauce","price":13, "description": "Tendered-crisp texture Shanghai Bok Choy, stir-fried in garlic sauce.","image":"https://static.wixstatic.com/media/bd03ff_b07323560a2f4d5b85803aaf912a0914~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 69, "name": "Vegetarian Delight","price":13, "description": "A mixture of delicious vegetables including Chinese cabbage, bok chow, mushroom, cabbage, broccoli, carrot and tofu. Stir-fry in garlic sauce.","image":""},
    { "id": 70, "name": "Eggplants In Garlic Sauce","price":14, "description": "tir-fried with scallions, ginger and dry pepper in garlic sauce. None spicy available.","image":"https://static.wixstatic.com/media/bd03ff_3e9ea7a9d9bd443586304c09daf102de~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 71, "name": "Curry Tofu","price":13, "description": "Sauteed with eggplants, sweet potatoes and onions in homemade curry coconut sauce.","image":"","extras":["None","Mild","Spicy","Extra"]},
    { "id": 72, "name": "Clay Pot With Tofu & Vegetables","price":13, "description": "Simmered with garlic, onion, Chinese cabbage and bell pepper, Served in ceramic pot.","image":"https://static.wixstatic.com/media/bd03ff_15c1053e24e24c2b9ff4ae599c86ab2e~mv2.jpeg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 73, "name": "Broccoli In Garlic Sauce","price":13, "description": "Stir-fried in a garlic sauce.","image":"https://static.wixstatic.com/media/bd03ff_faa4c92b3ed349448624764900b5a5d1~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 74, "name": "Salt And Pepper Tofu","price":13, "description": "Crispy tofu with chopped bell pepper and fried onion sprinkled in homemade salt & pepper flavor.","image":"https://static.wixstatic.com/media/bd03ff_394a357643f04de7bf7566f914cc650a~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 75, "name": "Snow Peas","price":14, "description": "Sauteed with Onion, Carrot and Mushroom in a Light Sauce.","image":"https://static.wixstatic.com/media/bd03ff_a016d320c7f342b5a6ba642b64dd8fcc~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 76, "name": "Asparagus in Garlic Sauce","price":14, "description": "Fresh Asparagus stir-fry in garlic sauce.","image":""},
   
  ],
  "Desserts":[
    { "id": 79, "name": "Fried Bananas","price":6, "description": "","image":"https://static.wixstatic.com/media/bd03ff_d1c4bd18b9024a41b9cf7a26ba741938~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 80, "name": "French Macarons","price":7, "description": "","image":"https://static.wixstatic.com/media/bd03ff_28643859b4e24b9796653827e4777770~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"}
  ],
  "Beverages":[
    { "id": 81, "name": "Black Milk Tea","price":5.50, "description": "Dark roast Vietnamese grown coffee mix with condense milk.","image":"https://static.wixstatic.com/media/bd03ff_52853213be0542ceb3a8637a74e578b6~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp","extras":["Black","Green","Thai","Taro"]},
    { "id": 82, "name": "Fruit Tea","price":5.50, "description": "Choose a flavor, Passion Fruit, Mango, Strawberry, or Peach. Choose Rainbow Jelly, Coconut Jelly, or Boba Tapioca.","image":"https://static.wixstatic.com/media/bd03ff_8bbaf30d19a3443e911a463bd3f3d4a0~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp","extras":["Passion Fruit","Lychee","Mango","Strawberry","Peach"]},
    { "id": 83, "name": "Smoothie","price":5.50, "description": "Please choose from Mango, Strawberry, Strawberry Banana.","image":"https://static.wixstatic.com/media/bd03ff_0a7e8f0f52064680804180089dc04cff~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp","extras":["Mango","Strawberry","Strawberry Banana"]},
    { "id": 84, "name": "Vietnamese Coffee","price":5.50, "description": "Dark roast Vietnamese grown coffee mix with condense milk.","image":"https://static.wixstatic.com/media/bd03ff_52853213be0542ceb3a8637a74e578b6~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp","extras":["Iced","Hot"]},
    { "id": 85, "name": "Coconut JUICE","price":5.50, "description": "","image":"https://static.wixstatic.com/media/bd03ff_e7fd31a33f9b4aff88f0c0022bafc9bb~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 86, "name": "Lychee Drink","price":5.50, "description": "","image":"https://static.wixstatic.com/media/bd03ff_ddb1717f52ce455aa89cdd513da28840~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"},
    { "id": 87, "name": "San Pellegrino","price":3, "description": "","image":""},
    { "id": 88, "name": "Pine Apple","price":3, "description": "","image":""},
    { "id": 89, "name": "Cranberry","price":3, "description": "","image":""},
    { "id": 90, "name": "Green Tea Iced Tea","price":3, "description": "","image":""},
    { "id": 91, "name": "Hot Tea","price":3, "description": "Hot Tea for To-Go, choose from Black or Green Tea","image":"","extras":["Black","Green"]},
    { "id": 78, "name": "Soft Drinks","price":3, "description": "","image":"","extras":["Coke","Diet Coke","Spirte","Ginger Ale"]}
]
}
