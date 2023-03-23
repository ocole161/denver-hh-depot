Rails.application.routes.draw do
  resources :user_special_favorites, only: [:create, :show, :destroy]
  resources :user_special_reviews, only: [:index, :create, :update, :show]
  resources :users
  resources :specials

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/authorized', to: 'users#show'

  get '/special_average/:id', to: 'specials#average_rating'

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
