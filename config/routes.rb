Rails.application.routes.draw do
  resources :user_special_favorites
  resources :user_special_reviews
  resources :users
  resources :specials
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/hello', to: 'application#hello_world'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
