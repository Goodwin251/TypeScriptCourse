// Крок 1: Створення типів товарів

// Базовий тип товару з основними полями
type BaseProduct = {
    id: number;
    name: string;
    price: number;
    description?: string; // Інші базові поля, якщо необхідно
};

// Специфічний тип для електроніки, що розширює BaseProduct
type Electronics = BaseProduct & {
    category: 'electronics';
    warrantyPeriod: number; // Гарантійний термін в місяцях
    brand: string;
};

// Специфічний тип для одягу, що розширює BaseProduct
type Clothing = BaseProduct & {
    category: 'clothing';
    size: string;
    material: string;
};

// Специфічний тип для книг, що розширює BaseProduct
type Book = BaseProduct & {
    category: 'book';
    author: string;
    pageCount: number;
};

// Крок 2: Створення функцій для пошуку товарів

// Функція для пошуку товару за ідентифікатором
const findProduct = <T extends BaseProduct>(products: T[], id: number): T | undefined => {
    return products.find(product => product.id === id);
};

// Функція для фільтрації товарів за ціною
const filterByPrice = <T extends BaseProduct>(products: T[], maxPrice: number): T[] => {
    return products.filter(product => product.price <= maxPrice);
};

// Крок 3: Створення кошика

// Тип елемента кошика, де `product` має тип T, що розширює BaseProduct
type CartItem<T extends BaseProduct> = {
    product: T;
    quantity: number;
};

// Функція для додавання товару в кошик
const addToCart = <T extends BaseProduct>(
    cart: CartItem<T>[],
    product: T,
    quantity: number
): CartItem<T>[] => {
    const existingItemIndex = cart.findIndex(item => item.product.id === product.id);
    if (existingItemIndex >= 0) {
        cart[existingItemIndex].quantity += quantity; // Збільшуємо кількість існуючого товару
    } else {
        cart.push({ product, quantity }); // Додаємо новий товар до кошика
    }
    return cart;
};

// Функція для підрахунку загальної вартості товарів у кошику
const calculateTotal = <T extends BaseProduct>(cart: CartItem<T>[]): number => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
};

// Крок 4: Використання функцій

// Створення тестових даних для різних типів товарів
const electronics: Electronics[] = [
    {
        id: 1,
        name: "Телефон",
        price: 10000,
        category: 'electronics',
        warrantyPeriod: 24,
        brand: "Samsung"
    }
];

const clothing: Clothing[] = [
    {
        id: 2,
        name: "Футболка",
        price: 500,
        category: 'clothing',
        size: "M",
        material: "Cotton"
    }
];

const books: Book[] = [
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

let cart: CartItem<BaseProduct>[] = [];
if (phone) cart = addToCart(cart, phone, 1);

const shirt = findProduct(clothing, 2);
if (shirt) cart = addToCart(cart, shirt, 3);

const total = calculateTotal(cart);
console.log("Загальна вартість кошика:", total);
