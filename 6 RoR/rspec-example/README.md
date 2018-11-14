# Пример тестирования приложения с использованием [RSpec](https://github.com/rspec/rspec-rails)

То же самое простое приложение из `rails-example`, только с тестами
на RSpec.

## Как запустить

Запуск приложения

```shell
rails s
```

Запуск тестов

```shell
bundle exec rspec
```

## Как повторить

```shell
rails new rspec-example --skip-test
cd rspec-example
```

**`skip-test` нужен для того, чтобы не генерировать стандартные тесты.**

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

Добавить строчки

```text
gem 'rails-controller-testing'
gem 'rspec-rails', '~> 3.8'
```

(в блок `group :development, :test do` - **и в development, и в test**).

```shell
bundle install
rails generate rspec:install
```

Дальше, как и в `rails-example` создаем один контроллер с двумя представлениями

```shell
rails g controller example in out
```

**Удалите директории spec/helpers и spec/views, так как мы пока будем тестировать только контроллеры.**

## Какие файлы менялись

* `app/controllers/example_controller.rb`;
* `app/views/example/in.html.erb`;
* `app/views/example/out.html.erb`;
* **`config/routes.rb`**;
* `spec/controllers/example_controller_spec.rb`;
* `Gemfile`.
