Rails.application.routes.draw do
  root "maintenances#index"

  resources :maintenances, defaults: {format: :json}
  post 'user_token' => 'user_token#create'
  resources :users, defaults: {format: :json}
  resources :apartments, defaults: {format: :json}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
