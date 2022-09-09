
const products = [
    {
     id: 13,
     name: "Ticket",
     stock: 5,
     cost: 1500,
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
     capacity: 5,
     image: "https://thumbs.dreamstime.com/z/admission-ticket-22647943.jpg",
     sales: 0,
     categoryId: 9,
     brandId: 95,
     packingId: null,
     category: {
        name: "Ventas",
        id: 9
      },
      brand: {
        id: 95,
        name: "Golden ticket"
      },
      reviews: []
    },
    
]

module.exports = {
    products,
}
