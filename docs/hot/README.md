# HTML и CSS

![HTML5](/hot_1.png)

## Шаблон HTML

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
<body>

</body>
</html>
```

## Очищенный шаблон

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>TODO List</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

</body>
</html>
```

## Разметка

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>TODO List</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <!-- Заголовок -->
    <header>
        <h1>TODO List</h1>
    </header>

    <!-- Основная часть -->
    <main>
        <!-- Список дел -->
        <div>
            <ul>
                <li>Дело 1</li>
                <li>Дело 2</li>
            </ul>
        </div>

        <hr/>

        <!-- Форма добавления дела -->
        <div>
            <form>
                <input placeholder="Введите дело" />
                <button type="submit">Создать</button>
            </form>
        </div>
    </main>
</body>
</html>
```

![CSS](/hot_2.gif)

```css
селектор1 {
    /* свойство 1 */
    /* свойство 2 */
    /* ... */
}

селектор2 {
    /* свойство 3 */
    /* свойство 4 */
    /* ... */
}
```

## Использование селекторов

### 1

```html
<!-- Список дел -->
<div>
    <ul>
        <li>
            <input type="checkbox" id="1" />
            <label for="1">Дело 1</label>
        </li>
        <li>
            <input type="checkbox" id="2" />
            <label for="2">Дело 2</label>
        </li>
    </ul>
</div>
```

```css
ul {
    list-style-type: none;
}
```

### 2

```html
<!-- Список дел -->
<div>
    <ul id="task-list">
        <li>
            <input type="checkbox" id="1" />
            <label for="1">Дело 1</label>
        </li>
        <li>
            <input type="checkbox" id="2" />
            <label for="2">Дело 2</label>
        </li>
    </ul>
</div>
```

```css
#task-list {
    list-style-type: none;
}
```

## Зачеркивание текста

```html
<!-- Список дел -->
<div>
    <ul id="task-list">
        <li>
            <input type="checkbox" id="1" />
            <label for="1">Дело 1</label>
        </li>
        <li>
            <input type="checkbox" id="2" />
            <label for="2">Дело 2</label>
        </li>
    </ul>
</div>
```

### 1

```css
input + label {
    text-decoration: line-through;
}
```

### 2

```css
input[type="checkbox"]:checked + label {
    text-decoration: line-through;
}
```

### 3

```css
input[type="checkbox"]:checked + .checkable {
    text-decoration: line-through;
}
```

![Form](/hot_3.gif)

```html
<form>
    <input name="name1" />
    <input name="name2" />
    <input type="submit" value="Отправить" />
</form>
```
