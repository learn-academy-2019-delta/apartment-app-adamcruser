Rails.application.routes.draw do
  resources:apartments
  devise_for :users
  get '*path', to: 'pages#root', constraints: ->(request){ request.format.html?}
  root to: 'pages#root'
end
