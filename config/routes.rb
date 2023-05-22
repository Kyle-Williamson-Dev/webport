Rails.application.routes.draw do
  root "pages#home"

  get 'pages/about'
  get 'pages/gallery'

  
end
