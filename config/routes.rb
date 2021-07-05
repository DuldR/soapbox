Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do

    resource :follow, only: [:show, :destroy, :create]
    resources :users, only: [:create] do
      resources :follows, only: [:index]
    end
    resources :stories, only: [:create, :index, :show, :destroy, :update]
    resources :comments, only: [:create, :index, :show, :destroy, :update]
    resources :topics, only: [:create, :index, :destroy]


    resource :session, only: [:create, :destroy]

  

  end

end
