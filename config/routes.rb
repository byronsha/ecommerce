Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :products, only: [:index]
    resources :brands, only: [:index]
    resources :categories, only: [:index]
  end

end
