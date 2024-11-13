# Практична робота №5

Розробив Солодкий Ярослав, ПД-42.

Цей проєкт реалізує базові функції для управління товарами в інтернет-магазині. Система підтримує різні типи товарів (електроніка, одяг, книги) та дозволяє працювати з кошиком покупок через generic типи.

## Опис функціоналу

### Типи товарів
Програма визначає базовий тип `BaseProduct`, який включає основні поля, такі як `id`, `name`, `price`, та інші. На основі цього типу створені специфічні типи для кожної категорії товарів:
- **Electronics**: містить поле для категорії, гарантійного терміну та бренду.
- **Clothing**: містить поля для категорії, розміру та матеріалу.
- **Book**: містить поля для категорії, автора та кількості сторінок.

### Основні функції

1. **Пошук товару за ID**
   - Функція `findProduct` приймає масив товарів та ідентифікатор (ID), повертаючи товар з відповідним ID або `undefined`, якщо такого товару немає.

2. **Фільтрація товарів за ціною**
   - Функція `filterByPrice` фільтрує товари, що мають ціну, меншу або рівну заданому значенню.

3. **Кошик покупок**
   - Тип `CartItem` представляє елемент у кошику, який містить товар та кількість.
   - **Додавання товару до кошика**: Функція `addToCart` додає товар до кошика або оновлює кількість, якщо товар вже є в кошику.
   - **Підрахунок загальної вартості**: Функція `calculateTotal` розраховує загальну вартість всіх товарів у кошику.

## Приклади використання

```typescript
// Створення тестових даних
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

// Пошук товару
const phone = findProduct(electronics, 1);
console.log("Знайдений товар:", phone);

// Фільтрація товарів за ціною
const affordableProducts = filterByPrice([...electronics, ...clothing, ...books], 1000);
console.log("Товари до 1000 грн:", affordableProducts);

// Робота з кошиком
let cart: CartItem<BaseProduct>[] = [];
if (phone) cart = addToCart(cart, phone, 1);

const shirt = findProduct(clothing, 2);
if (shirt) cart = addToCart(cart, shirt, 3);

const total = calculateTotal(cart);
console.log("Загальна вартість кошика:", total);
