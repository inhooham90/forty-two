Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resources :follows, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:update, :create, :destroy, :show, :index] do
      resources :comments, only: [:create, :update, :destroy, :show, :index]
    end
    resources :likes, only: [:create, :destroy]
  end
  root "static_pages#root"
end
