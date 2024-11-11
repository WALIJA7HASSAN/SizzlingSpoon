import { createSlice } from "@reduxjs/toolkit"



const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    menuItems:  [
        {
            name: "Caesar Salad",
            imgSrc: "/Assets/popItem1.png",
            description: "Crispy romaine lettuce tossed in Caesar dressing with croutons and parmesan.",
            price: "10",
            category: ["popular", "salad", "healthy", "vegetarian"]
        },
        {
            name: "Complete Grilled Chicken",
            imgSrc: "/Assets/popItem2.png",
            description: "Juicy grilled chicken served with seasoned vegetables and herb rice.",
            price: "18",
            category: ["popular", "main course", "chicken", "grilled"]
        },
        {
            name: "Margherita Pizza",
            imgSrc: "/Assets/popItem3.png",
            description: "Classic Italian pizza topped with fresh mozzarella, tomatoes, and basil.",
            price: "14",
            category: ["popular", "pizza", "Italian", "vegetarian"]
        },
        {
            name: "Ribeye Steak",
            imgSrc: "/Assets/popItem4.png",
            description: "Tender and juicy ribeye steak cooked to perfection with garlic butter.",
            price: "25",
            category: ["popular", "main course", "steak", "grilled"]
        },
        {
            name: "Nigiri Sushi Set",
            imgSrc: "/Assets/popItem5.png",
            description: "Assorted nigiri sushi with salmon, tuna, and shrimp, served with soy sauce.",
            price: "20",
            category: ["popular", "sushi", "Japanese", "seafood"]
        },
        {
            name: "Unpopular",
            imgSrc: "/Assets/popItem5.png",
            description: "Assorted nigiri sushi with salmon, tuna, and shrimp, served with soy sauce.",
            price: "20",
            category: [ "sushi", "Japanese", "seafood"]
        }
    ],
  },
  reducers: {
    addItemToCart: (state, action) => {     
      return  action.payload;
    },
    removeItemToCart: (id) => {     
      return  action.payload;
    },
    clearCart: () => {     
      return  action.payload;
    },
  },
})

export const itemsActions=itemsSlice.actions
export default itemsSlice

