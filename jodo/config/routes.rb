Rails.application.routes.draw do
  resources :rewards
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'jodo', to: 'jodo#index'
end
