Rails.application.routes.draw do
  root to: 'posts#index'
  post 'posts', to: 'posts#create'
  # get 'posts',to:'posts#index'
  get 'posts/:id', to: 'posts#checed'
end
