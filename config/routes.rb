Rails.application.routes.draw do
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  root to: 'pages#home'

  get 'geobingo', to: 'pages#geobingo', as: :geobingo
  get 'threenames', to: 'pages#threenames', as: :threenames
end
