# Интернет-магазин "Кошачий рай"

## Запуск проекта

### 1. Клонируем репозиторий:
```bash
git clone https://github.com/ISK-wq/F_B_2.git
cd cat-store
```

### 2. Устанавливаем зависимости и запускаем сервера
```bash
cd product-server && npm install && node server.js
cd ../admin-server && npm install && node server.js
```

### 3. Открываем в браузере:
Каталог котиков: http://localhost:3000
Админ-панель доступна через API: http://localhost:8080/api/cats

## API Спецификация для панели администратора

### Получить все товары
- **GET** `/api/products`
- **Ответ:** JSON-массив всех товаров

### Добавить товары
- **POST** `http://localhost:8080/api/products/api/products`
- **Тело запроса:**
```json
[
  { "name": "Товар", "price": 1000, "description": "Описание", "categories": ["Категория1"] }
]
```

### Редактировать товар
PUT /api/products/{id}
Тело запроса: поля для обновления
http://localhost:8080/api/products/1
{"price":14000}
Ответ: Обновлённый товар

### Удалить товар
DELETE /api/products/{id}
Ответ: 204 No Content
