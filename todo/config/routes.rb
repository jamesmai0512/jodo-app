Rails.application.routes.draw do
  resources :tasks, :collection => { :delete => :put }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
