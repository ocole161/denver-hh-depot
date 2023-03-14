Rails.application.routes.draw do
  resources :user_special_favorites, only: [:create, :read, :destroy]
  resources :user_special_reviews, only: [:create, :read]
  resources :users
  resources :specials

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
