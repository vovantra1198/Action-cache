Rails.application.routes.draw do
  root  'landing#index'

  resource :messages, only: [:new, :create]
end
