// ══════════════ MENU DATA ══════════════
const menuData = {
  morning: [
    {id:"m1", name:"Masala Dosa", price:80, img:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Crispy rice crepe with spiced potato filling & chutneys", rating:"4.8"},
    {id:"m2", name:"Idli Sambar", price:60, img:"https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Soft steamed rice cakes with aromatic lentil soup", rating:"4.7"},
    {id:"m3", name:"Poha", price:50, img:"https://images.unsplash.com/photo-1625944525533-473f1e9b2f3c?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Flattened rice with mustard seeds, onions & turmeric", rating:"4.5"},
    {id:"m4", name:"Upma", price:70, img:"https://images.unsplash.com/photo-1589308078056-f8b5d7c0a47b?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Semolina porridge with veggies & tempered spices", rating:"4.4"},
    {id:"m5", name:"Aloo Paratha", price:90, img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Whole wheat bread stuffed with spiced mashed potato", rating:"4.9"},
    {id:"m6", name:"Pancakes", price:120, img:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Fluffy golden pancakes with maple syrup & butter", rating:"4.7"},
    {id:"m7", name:"Egg Omelette", price:70, img:"https://images.unsplash.com/photo-1612182189685-bcea26e27fda?auto=format&fit=crop&w=500&q=80", type:"non-veg", desc:"Fluffy masala omelette with bell peppers & cheese", rating:"4.6"},
    {id:"m8", name:"Bread Butter", price:40, img:"https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Toasted bread slices with creamy salted butter", rating:"4.2"},
    {id:"m9", name:"Chai & Toast", price:30, img:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Masala chai with crispy buttered toast", rating:"4.8"},
    {id:"m10", name:"Cornflakes Bowl", price:60, img:"https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Crunchy cornflakes with chilled milk & fruits", rating:"4.3"},
    {id:"m11", name:"Club Sandwich", price:100, img:"https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Triple-decker sandwich with veggies & cream cheese", rating:"4.6"},
    {id:"m12", name:"Fruit Bowl", price:80, img:"https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Fresh seasonal fruits with honey & mint drizzle", rating:"4.7"},
    {id:"m13", name:"Mango Milkshake", price:90, img:"https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Thick Alphonso mango shake with vanilla ice cream", rating:"4.9"},
    {id:"m14", name:"Filter Coffee", price:50, img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"South Indian filter coffee with frothy milk", rating:"4.8"},
    {id:"m15", name:"Banana Shake", price:70, img:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Creamy banana milkshake with almond & honey", rating:"4.5"},
    {id:"m16", name:"Oats Porridge", price:60, img:"https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Healthy rolled oats with nuts & dry fruits", rating:"4.4"},
    {id:"m17", name:"Toast with Jam", price:40, img:"https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Crispy toast with strawberry or mixed fruit jam", rating:"4.3"},
    {id:"m18", name:"Vada Pav", price:30, img:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Mumbai's favorite potato fritter in soft pav bun", rating:"4.9"},
    {id:"m19", name:"Puri Bhaji", price:80, img:"https://images.unsplash.com/photo-1600628422019-73e3c91f96b6?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Puffed golden puris with spiced potato curry", rating:"4.7"},
    {id:"m20", name:"Dhokla", price:60, img:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Steamed fermented chickpea cake, light & tangy", rating:"4.6"}
  ],
  afternoon: [
    {id:"a1", name:"Veg Burger", price:120, img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Crispy veggie patty with lettuce, tomato & sauce", rating:"4.6"},
    {id:"a2", name:"Margherita Pizza", price:200, img:"https://images.unsplash.com/photo-1548365328-9f547fb0953d?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Classic thin crust with fresh mozzarella & basil", rating:"4.8"},
    {id:"a3", name:"Penne Arrabbiata", price:180, img:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Penne in spicy tomato sauce with garlic & parsley", rating:"4.5"},
    {id:"a4", name:"French Fries", price:80, img:"https://images.unsplash.com/photo-1541592553160-82008b127ccb?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Crispy golden fries with seasoning & dips", rating:"4.7"},
    {id:"a5", name:"Grilled Sandwich", price:90, img:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Grilled veggies with melted cheese on sourdough", rating:"4.5"},
    {id:"a6", name:"Cold Coffee", price:90, img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Chilled espresso shake topped with whipped cream", rating:"4.8"},
    {id:"a7", name:"Veg Momos", price:100, img:"https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Steamed dumplings with cabbage, carrot & spices", rating:"4.7"},
    {id:"a8", name:"Masala Maggi", price:50, img:"https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Instant noodles with veggies & masala twist", rating:"4.6"},
    {id:"a9", name:"Paneer Wrap", price:110, img:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Spiced paneer in warm tortilla with mint chutney", rating:"4.6"},
    {id:"a10", name:"Veg Tacos", price:130, img:"https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Crunchy corn tacos with salsa, beans & guacamole", rating:"4.5"},
    {id:"a11", name:"Loaded Nachos", price:120, img:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Tortilla chips with cheese, jalapeños & sour cream", rating:"4.7"},
    {id:"a12", name:"Chicken Hot Dog", price:100, img:"https://images.unsplash.com/photo-1619740455993-9d612ac9dc98?auto=format&fit=crop&w=500&q=80", type:"non-veg", desc:"Juicy chicken sausage in soft bun with mustard", rating:"4.5"},
    {id:"a13", name:"Chicken Burger", price:150, img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=500&q=80", type:"non-veg", desc:"Crispy fried chicken with coleslaw & spicy mayo", rating:"4.8"},
    {id:"a14", name:"Chicken Wings", price:180, img:"https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=500&q=80", type:"non-veg", desc:"Crispy wings tossed in buffalo or BBQ sauce", rating:"4.9"},
    {id:"a15", name:"Paneer Roll", price:110, img:"https://images.unsplash.com/photo-1600628422019-73e3c91f96b6?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Tandoori paneer roll with onions & green chutney", rating:"4.7"},
    {id:"a16", name:"Veg Spring Roll", price:90, img:"https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Crispy rolls filled with seasoned veggies & noodles", rating:"4.5"},
    {id:"a17", name:"Cheese Balls", price:100, img:"https://images.unsplash.com/photo-1548340748-6af6e77f63af?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Fried mozzarella balls with marinara dipping sauce", rating:"4.6"},
    {id:"a18", name:"Onion Rings", price:80, img:"https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Beer-battered crispy rings with ranch dip", rating:"4.4"},
    {id:"a19", name:"Fresh Juice", price:60, img:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Freshly squeezed seasonal fruit juice", rating:"4.7"},
    {id:"a20", name:"Protein Smoothie", price:120, img:"https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Banana, oats, peanut butter & protein powder blend", rating:"4.5"}
  ],
  lunch: [
    {id:"l1", name:"Paneer Butter Masala", price:180, img:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Cottage cheese cubes in rich tomato & cream gravy", rating:"4.9"},
    {id:"l2", name:"Veg Thali", price:150, img:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Complete meal: roti, rice, dal, sabzi & dessert", rating:"4.8"},
    {id:"l3", name:"Dal Tadka", price:120, img:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Yellow lentils tempered with ghee, garlic & cumin", rating:"4.7"},
    {id:"l4", name:"Jeera Rice", price:100, img:"https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Fragrant basmati rice with whole cumin & ghee", rating:"4.6"},
    {id:"l5", name:"Butter Naan", price:40, img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Soft leavened bread brushed with butter from tandoor", rating:"4.8"},
    {id:"l6", name:"Chicken Curry", price:220, img:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80", type:"non-veg", desc:"Slow-cooked chicken in aromatic whole spice gravy", rating:"4.9"},
    {id:"l7", name:"Chicken Biryani", price:200, img:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80", type:"non-veg", desc:"Dum-cooked basmati rice with marinated chicken", rating:"5.0"},
    {id:"l8", name:"Roti Sabzi", price:120, img:"https://images.unsplash.com/photo-1542528180-1c2803fa048c?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Whole wheat rotis with seasonal vegetable curry", rating:"4.5"},
    {id:"l9", name:"Kadhi Chawal", price:130, img:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Tangy yogurt curry with pakoras over steamed rice", rating:"4.6"},
    {id:"l10", name:"Rajma Rice", price:140, img:"https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Kidney beans in thick onion-tomato gravy with rice", rating:"4.7"},
    {id:"l11", name:"Chole Bhature", price:150, img:"https://images.unsplash.com/photo-1626132647523-66b5c9232072?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Spicy chickpea curry with puffed fried bread", rating:"4.8"},
    {id:"l12", name:"Palak Paneer", price:170, img:"https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Fresh spinach gravy with soft cottage cheese cubes", rating:"4.7"},
    {id:"l13", name:"Mix Veg", price:140, img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Seasonal garden vegetables in mild curry sauce", rating:"4.5"},
    {id:"l14", name:"Veg Fried Rice", price:130, img:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Wok-tossed basmati rice with vegetables & soy sauce", rating:"4.6"},
    {id:"l15", name:"Hakka Noodles", price:140, img:"https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Indo-Chinese wok noodles with veggies & sauces", rating:"4.7"},
    {id:"l16", name:"Egg Curry", price:150, img:"https://images.unsplash.com/photo-1604908177522-4296f1b0f6b2?auto=format&fit=crop&w=500&q=80", type:"non-veg", desc:"Hard-boiled eggs in spiced onion-tomato gravy", rating:"4.6"},
    {id:"l17", name:"Fish Curry", price:220, img:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80", type:"non-veg", desc:"Fresh fish in Goan coconut & tamarind curry", rating:"4.8"},
    {id:"l18", name:"Veg Pulao", price:120, img:"https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Fragrant basmati rice pilaf with mixed vegetables", rating:"4.5"},
    {id:"l19", name:"Sambar Rice", price:110, img:"https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"South Indian rice mixed with lentil & vegetable stew", rating:"4.6"},
    {id:"l20", name:"Curd Rice", price:100, img:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Comfort rice mixed with fresh curd & tempered mustard", rating:"4.4"}
  ],
  sweets: [
    {id:"s1", name:"Chocolate Cake", price:120, img:"https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Moist dark chocolate cake with ganache frosting", rating:"4.9"},
    {id:"s2", name:"Vanilla Ice Cream", price:60, img:"https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Creamy vanilla ice cream with chocolate sprinkles", rating:"4.7"},
    {id:"s3", name:"Fudge Brownie", price:100, img:"https://images.unsplash.com/photo-1589375010624-73357d16f5a8?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Dense fudgy brownie with walnuts & caramel swirl", rating:"4.8"},
    {id:"s4", name:"Strawberry Shake", price:90, img:"https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Fresh strawberry shake with whipped cream topping", rating:"4.7"},
    {id:"s5", name:"Jalebi", price:50, img:"https://images.unsplash.com/photo-1627308595229-7830a5c18106?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Crispy fermented wheat spirals soaked in sugar syrup", rating:"4.6"},
    {id:"s6", name:"Gulab Jamun", price:40, img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Soft milk solids balls in rose-cardamom sugar syrup", rating:"4.9"},
    {id:"s7", name:"Rasgulla", price:35, img:"https://images.unsplash.com/photo-1585325701165-8c6e47bde019?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Spongy chenna balls in light sugar syrup", rating:"4.7"},
    {id:"s8", name:"Besan Ladoo", price:30, img:"https://images.unsplash.com/photo-1586191852909-1afe4c2b9573?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Roasted chickpea flour balls with ghee & cardamom", rating:"4.5"},
    {id:"s9", name:"Kaju Katli", price:150, img:"https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Cashew fudge diamonds with silver leaf topping", rating:"4.8"},
    {id:"s10", name:"Coconut Barfi", price:120, img:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Sweet coconut squares with cardamom & pistachios", rating:"4.6"},
    {id:"s11", name:"Glazed Donut", price:80, img:"https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Fluffy yeast donut with rainbow sprinkles glaze", rating:"4.7"},
    {id:"s12", name:"Chocolate Cupcake", price:70, img:"https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Mini chocolate cake with buttercream frosting swirl", rating:"4.7"},
    {id:"s13", name:"Cream Pastry", price:90, img:"https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Layered puff pastry with whipped cream & fruits", rating:"4.6"},
    {id:"s14", name:"Belgium Waffle", price:110, img:"https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Crispy waffle with maple syrup & strawberry sauce", rating:"4.8"},
    {id:"s15", name:"Mango Pudding", price:100, img:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Silky Alphonso mango custard with cream topping", rating:"4.7"},
    {id:"s16", name:"NY Cheesecake", price:150, img:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Dense & creamy classic New York baked cheesecake", rating:"4.9"},
    {id:"s17", name:"Rose Falooda", price:110, img:"https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Rose milk with basil seeds, vermicelli & ice cream", rating:"4.8"},
    {id:"s18", name:"Malai Kulfi", price:80, img:"https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Frozen Indian dessert with saffron & pistachios", rating:"4.7"},
    {id:"s19", name:"Chocolate Mousse", price:140, img:"https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Airy dark chocolate mousse with berries & mint", rating:"4.8"},
    {id:"s20", name:"Fruit Cream", price:90, img:"https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=500&q=80", type:"veg", desc:"Fresh seasonal fruits in sweetened cream & custard", rating:"4.6"}
  ]
};

// trending dishes (top picks from each category)
const trendingDishes = [
  {...menuData.lunch[6], trending: true, orders: 342},
  {...menuData.morning[0], trending: true, orders: 289},
  {...menuData.afternoon[13], trending: true, orders: 276},
  {...menuData.lunch[0], trending: true, orders: 254},
  {...menuData.sweets[0], trending: true, orders: 231},
  {...menuData.lunch[10], trending: true, orders: 218},
  {...menuData.afternoon[2], trending: true, orders: 205},
  {...menuData.morning[4], trending: true, orders: 198},
  {...menuData.sweets[15], trending: true, orders: 187},
  {...menuData.afternoon[6], trending: true, orders: 176},
  {...menuData.lunch[5], trending: true, orders: 165},
  {...menuData.sweets[4], trending: true, orders: 154}
];

// ══════════════ CART SYSTEM ══════════════
let cart = JSON.parse(localStorage.getItem('restaurantCart') || '[]');
let favorites = JSON.parse(localStorage.getItem('restaurantFavs') || '[]');

function saveCart() {
  localStorage.setItem('restaurantCart', JSON.stringify(cart));
  updateCartUI();
}

function saveFavs() {
  localStorage.setItem('restaurantFavs', JSON.stringify(favorites));
}

function addToCart(dish) {
  const existing = cart.find(i => i.id === dish.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({...dish, qty: 1});
  }
  saveCart();
  showToast(`${dish.name} added to cart! 🛒`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else saveCart();
}

function toggleFav(id) {
  const idx = favorites.indexOf(id);
  if (idx === -1) favorites.push(id);
  else favorites.splice(idx, 1);
  saveFavs();
  document.querySelectorAll(`[data-fav="${id}"]`).forEach(btn => {
    btn.classList.toggle('active', favorites.includes(id));
  });
}

function getCartTotal() {
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, i) => sum + i.qty, 0);
}
function isLoggedIn() {
  return localStorage.getItem("access_token") !== null;
}

function handleOrderClick(itemId) {
  if (!isLoggedIn()) {
    localStorage.setItem("redirectAfterLogin", window.location.href);
    window.location.href = "auth.html";
    return;
  }

  // future: razorpay
  alert("Proceed to payment for " + itemId);
}

function updateCartUI() {
  const count = getCartCount();
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count ? 'flex' : 'none';
  });

  const itemsEl = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total-amount');

  if (itemsEl) {
    if (cart.length === 0) {
      itemsEl.innerHTML = `<div class="empty-cart"><div class="empty-icon">🛒</div><p>Your cart is empty</p></div>`;
    } else {
      itemsEl.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img class="cart-item-img" src="${item.img}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=100&q=80'">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">₹${item.price}</div>
            <div class="cart-item-qty">
              <button class="qty-btn" onclick="updateQty('${item.id}', -1)">−</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  if (totalEl) totalEl.textContent = `₹${getCartTotal()}`;
}

function openCart() {
  document.getElementById('cart-overlay').classList.add('open');
  document.getElementById('cart-panel').classList.add('open');
}

function closeCart() {
  document.getElementById('cart-overlay').classList.remove('open');
  document.getElementById('cart-panel').classList.remove('open');
}

function whatsappOrder(name) {
  const msg = encodeURIComponent(`I want to order ${name}`);
  window.open(`https://wa.me/919322531740?text=${msg}`, '_blank');
}

// ══════════════ TOAST ══════════════
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = `
      position:fixed; bottom:30px; left:50%; transform:translateX(-50%) translateY(20px);
      background:linear-gradient(135deg,#FF4500,#FF8C00);
      color:white; padding:14px 28px; border-radius:40px;
      font-family:'Poppins',sans-serif; font-size:14px; font-weight:600;
      z-index:9999; opacity:0; transition:all 0.4s ease;
      box-shadow:0 8px 30px rgba(255,69,0,0.5);
      pointer-events:none; white-space:nowrap;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._t);
  toast._t = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 2500);
}

// ===== NAVBAR AUTH UI =====

function updateNavbar() {
  const token = localStorage.getItem("access_token");

  const loginBtn = document.getElementById("loginBtn");
  const userMenu = document.getElementById("userMenu");

  if (!loginBtn || !userMenu) return;

  if (token) {
    loginBtn.style.display = "none";
    userMenu.style.display = "block";
  } else {
    loginBtn.style.display = "block";
    userMenu.style.display = "none";
  }
}

// toggle dropdown
function toggleUserMenu() {
  const dropdown = document.getElementById("userDropdown");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

// logout
function logoutUser() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user_info");

  window.location.href = "index.html";
}

// temporary actions (no page change)
function goToOrders() {
  alert("My Orders (will implement later)");
}
function goToWishlist() {
  alert("Wishlist (will implement later)");
}
function goToHelp() {
  alert("Help (will implement later)");
}

// run when page loads
window.addEventListener("load", updateNavbar);

// ══════════════ FOOD CARD GENERATOR ══════════════
function createFoodCard(dish) {
  const isFav = favorites.includes(dish.id);
  const rating = dish.rating || (4 + Math.random()).toFixed(1);
  return `
    <div class="food-card">
      <div class="card-img-wrap">
        <img src="${dish.img}" alt="${dish.name}" 
          onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80'" 
          loading="lazy">
        <div class="card-badge ${dish.type}"></div>
        <button class="fav-btn ${isFav ? 'active' : ''}" data-fav="${dish.id}" onclick="toggleFav('${dish.id}')">♥</button>
      </div>
      <div class="card-body">
        <div class="card-name">${dish.name}</div>
        <div class="card-desc">${dish.desc || 'A delicious dish crafted with care'}</div>
        <div class="card-meta">
          <div class="card-price">₹${dish.price} <span>per serving</span></div>
          <div class="card-rating">⭐ ${rating}</div>
        </div>
        <div class="card-actions">
          <button class="btn-order" onclick="handleOrderClick('${dish.id}')">Order Now</button>
          <button class="btn-cart" onclick='addToCart(${JSON.stringify(dish)})'>🛒 Add</button>
        </div>
      </div>
    </div>
  `;
}

// ══════════════ NAVBAR SCROLL ══════════════
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ══════════════ HAMBURGER ══════════════
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  const ham = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');
  if (ham && links) {
    ham.addEventListener('click', () => links.classList.toggle('open'));
  }
});

// Page transition on link click
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href$=".html"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href.startsWith('http')) {
        e.preventDefault();
        document.body.style.opacity = '0';
        document.body.style.transform = 'translateY(-8px)';
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => window.location.href = href, 300);
      }
    });
  });
});
