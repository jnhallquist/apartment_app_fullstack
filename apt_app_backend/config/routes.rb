Rails.application.routes.draw do
  resources :maintenances
  post 'user_token' => 'user_token#create'
  resources :users
  resources :apartments
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
