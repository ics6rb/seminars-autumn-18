# `ajax-example` - два примера работы с AJAX

Первый пример явный (контроллер `explicit`) (все прописано руками),
второй - неявный (контроллер `implicit`) (сделано так, как считается хорошим тоном в рельсах).

## Как запустить

Запуск приложения

```shell
rails s
```

## Как повторить

```shell
rails new ajax-example
cd ajax-example
```

Открыть `Gemfile` и изменить строку

```text
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
```

на

```text
# Use SCSS for stylesheets
gem 'sassc'
```

**Установить зависимости командой `bundle`**.

Создать контроллеры `ExplicitController` и `ImplicitController`, каждый с представлением
`in`

```shell
rails g controller explicit in
```

```shell
rails g controller implicit in
```

Руками добавляем маршруты (и методы контроллеров) под названием `ajax`.
Делаем так, т.к. нам не нужны представления.

## Какие файлы менялись

* `app/assets/javascripts/explicit.js`;
* `app/controllers/explicit_controller.rb`;
* `app/views/example/in.html.erb`;
* `app/controllers/implicit_controller.rb`;
* `app/views/example/in.html.erb`;
* **`config/routes.rb`**;
* `Gemfile`.
