// class Products {
//     constructor(id, name, product, imageUrl) {
//       // abstract
//       if (this.constructor === Products) {
//         throw new Error("can not inilize the abstract class");
//       }
//       this.id = id;
//       this.name = name;
//       this.product = product;
//       this.imageUrl = imageUrl;
//     }
  
//     // abstract method
//     displayProduct() {
//       throw new Error("Abstract method must be implemented");
//     }
//   }
  
//   // PhysicalProduct inherited from Products
//   class PhysicalProduct extends Products {
//     constructor(id, name, price, weigth, imageUrl) {
//       super(id, name, price, imageUrl);
//       this.weigth = weigth; // additional property
//     }
  
//     displayProduct() {
//       return `<div class = "product">
//         <img src="${this.imageUrl}"
//         alt = "${this.name}"
//         class = "product-image" height = "200px" width="200px">
//         <h3>${this.name}</h3>
//         <p>Weight : ${this.weigth} Kg </p>
//         <button onclick="shop.addtocart(${this.id})">Add to Card</button>
//         </div>
//         `;
//     }
//   }
  
//   // DigitalProduct inherited from Products
//   class DigitalProduct extends Products {
//     constructor(id, name, price, fileSize, imageUrl) {
//       super(id, name, price, imageUrl);
//       this.fileSize = fileSize; // additional property
//     }
  
//     displayProduct() {
//       return `<div class = "product">
//           <img src="${this.imageUrl}"
//           alt = "${this.name}"
//           class = "product-image" height = "200px" width="200px">
//           <h3>${this.name}</h3>
//           <p>fileSize : ${this.fileSize} MB </p>
//           <button onclick="shop.addtocart(${this.id})">Add to Card</button>
//           </div>
//           `;
//     }
//   }
  
//   // cartItem class to to represent items in the cart
//   class CartItem {
//     constructor(product, quantity = 1) {
//       this.product = product;
//       this.quantity = quantity;
//     }
  
//     incrementQuantity() {
//       this.quantity++;
//     }
  
//     getTotalPrice() {
//       return this.product.price * this.quantity;
//     }
  
//     // factory
//     displayCartItem() {
//       return ``;
//     }
//   }
  
//   // cart class to manage cart items
//   class Cart {
//     constructor() {
//       this.items = []; // empty
//     }
//     addProduct(product) {
//       const existingItem = this.items.find(
//         (item) => this.product.id == product.id
//       );
  
//       if (existingItem) {
//         existingItem.incrementQuantity();
//       } else {
//         this.items.push(new CartItem(product));
//       }
//       this.displayCartItem();
//     }
  
//     displayCart() {
//       const cartItem = document.getElementById("cart-item");
//       cartItem.innerHTML = "";
//       this.items.forEach((item) => {
//         cartItem.innerHTML += item.displayCartItem();
//       });
//     }
  
//     checkout() {
//       if (this.items.length === 0) {
//         alert("Your cart is empty");
//       }
  
//       alert(`Checkout ${this.items.length}. Total price : ${this.getTotal()}`);
//       this.items = [];
//       this.displayCart();
//     }
  
//     // factory
//     getTotal() {
//       return this.items.reduce((total, item) => total + item.getTotalPrice());
//     }
//   }
  
//   let obj = new DigitalProduct(22, "jvysdvf", 654, 432, "yef");
//   obj.displayProduct();
  
class product {
    constructor(id , Name , price , imgurl ) {
        if(this.constructor === product) {
            throw new Error("can not initialize the class");
        }

        this.id = id;
        this.Name = Name;
        this.price = price;
        this.imgurl = imgurl;
    }

    showproduct() {
        throw new Error("Abstract method must be implemented");
    }

    
}

class PhysicalProduct extends product {
    constructor( id , Name , price , Weight , imgurl){
        super(id, Name , price , imgurl);
        this.Weight = Weight;
    }

    showproduct() {
        return`
        <div calss="product">
        <img src="${this.imgurl}" alt="${this.Name}" class="product-image">
        <h4>${this.Name}</h4>
        <p>Weight : ${this.Weight}</p>
        <p>price : ${this.price}</p>
        <button onclick="shop.addToCart(${this.id})">ADD TO CART</button>
        </div>
        `;
    }
}

class DigitalProduct extends product {
    constructor(id , Name , price , FileSize , imgurl){
        super(id, Name , price , imgurl);
        this.FileSize=FileSize;
    }

    showproduct() {
        return`
        <div calss="product">
        <img src="${this.imgurl}" alt="${this.Name}" class="product-image">
        <h4>${this.Name}</h4>
        <p>FileSize : ${this.FileSize}</p>
        <p>price : ${this.price}</p>
        <button onclick="shop.AddToCart(${this.id})">ADD TO CART</button>
        </div>
        `;
    }

}

class CartItem{
    constructor(product , quantity = 1) {
        this.product = product;
        this.quantity = quantity;
    }

    AddQuantity(){
        this.quantity++;
    }

    GetTotalprice() {
        return this.product.price * this.quantity;
    }

    ShowCartItem(){
        return`
        <li>
        <span>${this.product.Name}</span>
        <span>Quantity:${this.quantity}</span>
        <span>price : ${this.GetTotalprice()}</span>
        </li>
        `;
    }
}

class Cart {
    constructor(){
        this.Items = [];
    }

    AddToCart(productId){
        let product = product.find(p => p.id === productId);
        if(product) {
            let existingItem = this.Items.find(item => item.product.id === productId);
            if(existingItem) {
                existingItem.AddQuantity();
            }else{
                this.Items.push(new CartItem(product))
            }
            this.showcart();
        } else {
            throw new Error ("product not found");
        }
    }

    showcart() {
        const ItemList = document.getElementById("cart-item");
        ItemList.innerHTML = "";
        this.Items.forEach(Item => {
            ItemList.innerHTML += item.ShowCartItem();
        });
    }

    CheckOut(){
        if(this.Items.length === 0) {
            alert("CART WAS EMPTY.");
            return;
        }

        alert(`CheckOut ${this.Items.length} Items(s). Total price : ${this.GetTotal()}`);
        this.Items = [];
        this.showcart();
    }

    GetTotal(){
        return this.Items.reduce((Total, Item) => Total + item.GetTotalprice(), 0);
    }
}

let shop = new Cart();

let products = [
    new PhysicalProduct(1,"product 1", 30000,2.5,"https://via.placeholder.com/200"),
    new DigitalProduct(2,"product 2", 20000,100,"https://via.placeholder.com/200"),
    
];

let ListSection = document.getElementById("Product");
products.forEach(product => {
    ListSection.innerHTML += product.showproduct();
});

document.getElementById("checkout-button").addEventListener("click", () => {
    shop.CheckOut();
})