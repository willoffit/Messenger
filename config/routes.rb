Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resources :channels, only: [:create, :show, :index] do
      resources :messages, only: [:index]
    end
    resources :messages, only: [:create, :show]
    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
  mount ActionCable.server => '/cable'
end
