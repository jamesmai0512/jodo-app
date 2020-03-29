Rails.application.routes.draw do
  resources :tasks, :collection => { :delete => :put }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # /tasks/1/toggle
  # GET, POST, PUT/PATCH, DELETE
  # GET --> get single or get all
  # POST --> create
  # PUT/PATCH ---> update (existing)
  # DELETE --> delete (existing)
  # ===> Reason why we define a PUT URL
  put "tasks/:id/toggle", to: "tasks#toggle", as: "toggle"
end
