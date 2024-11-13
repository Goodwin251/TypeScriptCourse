"use strict";
// Крок 1: Створення типів товарів
// Крок 2: Створення функцій для пошуку товарів
// Функція для пошуку товару за ідентифікатором
const findProduct = (products, id) => {
    return products.find(product => product.id === id);
};
// Функція для фільтрації товарів за ціною
const filterByPrice = (products, maxPrice) => {
    return products.filter(product => product.price <= maxPrice);
};
// Функція для додавання товару в кошик
const addToCart = (cart, product, quantity) => {
    const existingItemIndex = cart.findIndex(item => item.product.id === product.id);
    if (existingItemIndex >= 0) {
        cart[existingItemIndex].quantity += quantity; // Збільшуємо кількість існуючого товару
    }
    else {
        cart.push({ product, quantity }); // Додаємо новий товар до кошика
    }
    return cart;
};
// Функція для підрахунку загальної вартості товарів у кошику
const calculateTotal = (cart) => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
};
// Крок 4: Використання функцій
// Створення тестових даних для різних типів товарів
const electronics = [
    {
        id: 1,
        name: "Телефон",
        price: 10000,
        category: 'electronics',
        warrantyPeriod: 24,
        brand: "Samsung"
    }
];
const clothing = [
    {
        id: 2,
        name: "Футболка",
        price: 500,
        category: 'clothing',
        size: "M",
        material: "Cotton"
    }
];
const books = [
    {
        id: 3,
        name: "Великий Гетсбі",
        price: 300,
        category: 'book',
        author: "Ф. Скотт Фіцджеральд",
        pageCount: 180
    }
];
// Тестування функцій
const phone = findProduct(electronics, 1);
console.log("Знайдений товар:", phone);
const affordableProducts = filterByPrice([...electronics, ...clothing, ...books], 1000);
console.log("Товари до 1000 грн:", affordableProducts);
let cart = [];
if (phone)
    cart = addToCart(cart, phone, 1);
const shirt = findProduct(clothing, 2);
if (shirt)
    cart = addToCart(cart, shirt, 3);
const total = calculateTotal(cart);
console.log("Загальна вартість кошика:", total);
