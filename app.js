const menu = [
  {
    id: 1,
    title: "Beef Caldereta",
    category: "MainCourses",
    price: 0,
    img: "./images/item-1.jpeg",
    desc: `So full of flavor, it's like your Tita's chismis (gossip) session – spicy and impossible to resist. Warning: may cause impromptu karaoke sessions.`,
  },
  {
    id: 2,
    title: "Lechon Paksiw",
    category: "MainCourses",
    price: 0,
    img: "./images/item-2.jpeg",
    desc: `The magical second act of the holiday lechon! So good, it makes you wonder why the pig didn't just come this way in the first place. `,
  },
  {
    id: 3,
    title: "Chopsuey with Quail Eggs",
    category: "MainCourses",
    price: 0,
    img: "./images/item-3.jpeg",
    desc: `A veggie party where quail eggs crash the scene. It's like eating a mini universe, but tastier.`,
  },
  {
    id: 4,
    title: "Pork Sisig",
    category: "MainCourses",
    price: 0,
    img: "./images/item-4.jpeg",
    desc: `So sizzling, it's the life of the party. Reminiscent of your uncle who starts breakdancing after one beer.`,
  },
  {
    id: 5,
    title: "Pork Dinuguan",
    category: "MainCourses",
    price: 0,
    img: "./images/item-5.jpeg",
    desc: `Ever tried chocolate soup? Here's the savory version, minus the chocolate. It's like convincing your Canadian friends it's just 'exotic gravy. A true culinary adventure, ay nako!`,
  },
  {
    id: 6,
    title: "Spaghetti",
    category: "MainCourses",
    price: 0,
    img: "./images/item-6.jpeg",
    desc: `As sweet as your mom's 'I love you,' and as unique as her 'Hoy, gising!' wake-up calls. It's the Filipino twist on an Italian classic.`,
  },
  {
    id: 7,
    title: "Fish Fillet with Cream of Tartar",
    category: "MainCourses",
    price: 0,
    img: "./images/item-7.jpeg",
    desc: `So light and crispy, its like eating a savory cloud. Fish? More like wish, because its what everyones been wishing for.`,
  },
  {
    id: 8,
    title: "Arozcaldo",
    category: "MainCourses",
    price: 0,
    img: "./images/item-8.jpeg",
    desc: `This comfort food is like a warm hug from your Lola. It's the remedy for everything, from a cold to heartbreak.`,
  },
  {
    id: 9,
    title: "Chipotle Chicken and Chips*",
    category: "MainCourses",
    price: 0,
    img: "./images/item-9.jpeg",
    desc: `A fusion of flavors that's as unexpected as an impromptu karaoke session at the party.
    `,
  },
  {
    id: 10,
    title: "Pandesal",
    category: "Breads",
    price: 0,
    img: "./images/item-10.jpeg",
    desc: `The humble superstar of every Filipino breakfast. Like your Tita's backhanded compliments – simple but impactful.`,
  },
  {
    id: 11,
    title: "Chicken Salad Sandwhich",
    category: "Breads",
    price: 0,
    img: "./images/item-11.jpeg",
    desc: `It's like the chicken had a spa day, came out refreshed, and decided to be a sandwich.!`,
  },
  {
    id: 12,
    title: "Puto",
    category: "Desserts",
    price: 0,
    img: "./images/item-12.jpeg",
    desc: `The unassuming sidekick of Dinuguan, like that cousin who's quiet at family gatherings but a superstar on TikTok.`,
  },
  {
    id: 13,
    title: "Taho",
    category: "Desserts",
    price: 0,
    img: "./images/item-13.jpg",
    desc: `Soft tofu with syrup and sago pearls. It's like breakfast and dessert had a delicious baby.`,
  },
  {
    id: 14,
    title: "Kakanin Platter",
    category: "Desserts",
    price: 0,
    img: "./images/item-14.jpeg",
    desc: `A sweet collection that's like attending a Filipino fiesta – colorful, varied, and slightly overwhelming.`,
  },
  {
    id: 15,
    title: "Water",
    category: "Beverages",
    price: 0,
    img: "./images/item-15.jpg",
    desc: `Nature's own brew, zero calories, and surprisingly pairs well with everything.`,
  },
  {
    id: 16,
    title: "Coffee",
    category: "Beverages",
    price: 0,
    img: "./images/item-16.jpg",
    desc: `The kickstarter of all Filipino gatherings. It's like the starting gun for Titas to begin the gossip marathon.`,
  },
  {
    id: 17,
    title: "Tea",
    category: "Beverages",
    price: 0,
    img: "./images/item-17.jpeg",
    desc: `For when you want to feel like you're at a high-end café, but you're just at your dining table in your pajamas.`,
  },
  {
    id: 18,
    title: "Ginger Ale",
    category: "Beverages",
    price: 0,
    img: "./images/item-18.jpeg",
    desc: `The bubbly rebel of the soda family. It's like soda with a PhD in spice.`,
  },
  {
    id: 19,
    title: "Coke Diet",
    category: "Beverages",
    price: 0,
    img: "./images/item-19.png",
    desc: `For when you're on a 'diet' but there are three types of pancit at the party. It's about balance, right?`,
  },
  {
    id: 20,
    title: "Coke",
    category: "Beverages",
    price: 0,
    img: "./images/item-20.png",
    desc: `The classic drink that's at every party. It's like your cool tito who knows all the latest dance moves.`,
  },
  {
    id: 21,
    title: "Iced Tea",
    category: "Beverages",
    price: 0,
    img: "./images/item-21.png",
    desc: `The cool-down companion for when the party gets too hot, like after your Tito tells his 25th joke of the night.`,
  },
  {
    id: 22,
    title: "Hot Chocolate",
    category: "Beverages",
    price: 0,
    img: "./images/item-22.png",
    desc: `The comforting end to a big meal, like your Lola's stories by the fireplace. It's nostalgia in a cup.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// load items 
window.addEventListener("DOMContentLoaded", function() {
  displayMenuItems(menu);
  displayMenuButtons();
});


function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
} 

function displayMenuButtons() {
  const categories = menu.reduce(function (values, item) {
    if(!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ['all']
  );
const categoryBtns = categories.map(function(category) {
   return `<button class="filter-btn" type="button"
    data-id=${category}>
            ${category}
          </button>`
}).join("");  
container.innerHTML = categoryBtns;
const filterBtns = container.querySelectorAll(".filter-btn");
// filter items 
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function(e) {

    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      // console.log(menuItems.category);
      if(menuItem.category === category){
        return menuItem;
      }
    });
    //console.log(menuCategory);
    if(category === "all") {
      displayMenuItems(menu);
    }else {
      displayMenuItems(menuCategory);
    }
    
  });
});

// Theme toggle event listener
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
  const lightIcon = document.getElementById('light-icon');
  const darkIcon = document.getElementById('dark-icon');
  if (document.body.classList.contains('dark-theme')) {
    darkIcon.style.display = 'block';
    lightIcon.style.display = 'none';
  } else {
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'block';
  }
});
}
