Rails.application.routes.draw do
  root to: 'example#in'
  get 'example/in'
  get 'example/out'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
