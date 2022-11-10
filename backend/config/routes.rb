Rails.application.routes.draw do
  # mount_devise_token_auth_for 'User', at: 'auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, format: 'json' do
    namespace :v1 do
      resources :users, only: %i[index create edit update destroy] do
        resources :lists, only: %i[index create destroy]
        resources :foods, only: %i[index create edit update destroy]
        resources :diaries, only: %i[index create edit update destroy]
      end

      resources :posts, only: %i[index create edit update destroy] do
        resources :comments, only: %i[create destroy]
        resources  :bookmarks, only: %i[index create destroy]
        resources  :favorites, only: %i[index create destroy]
      end

      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
      }

      namespace :auth do
        resources :sessions, only: %i[index]
      end
    end
  end
end
