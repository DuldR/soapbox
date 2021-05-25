Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :stories, only: [:create, :index, :show, :destroy, :update]
    resources :comments, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
  end

end
