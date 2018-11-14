# `rails-example` - пример простого приложения на RoR 

Один контроллер, 2 представления, одна форма и пример тестирования;

## Как запустить

Запуск приложения

```shell
rails s
```

Запуск тестов

```shell
rake test
```

## Как повторить

```shell
rails new rails-example
cd rails-example
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

Добавить строчку

```text
gem 'rails-controller-testing'
```

(в блок `group :test do`).

**Установить зависимости командой `bundle`**.

Создать контроллер `ExampleController` с двумя представлениями
`in` и `out`

```shell
rails g controller example in out
```

## Какие файлы менялись

* `app/controllers/example_controller.rb`;
* `app/views/example/in.html.erb`;
* `app/views/example/out.html.erb`;
* **`config/routes.rb`**;
* `test/controllers/example_controller_test.rb`;
* `Gemfile`.
