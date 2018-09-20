Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update] do
      member do
        patch :follow
        delete :unfollow
      end
    end
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:update, :create, :destroy, :show, :index]

  end
  root "static_pages#root"
end
