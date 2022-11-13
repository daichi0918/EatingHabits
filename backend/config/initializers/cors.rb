# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

# require 'dotenv'
# Dotenv.load

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # origins ENV['HOST_FRONT']
    origins 'http://localhost:4000'
    # origins 'http://160.251.98.255:4000'

    resource '*',
             headers: :any,
             expose: %w[access-token expiry token-type uid client],
             methods: %i[get post put patch delete options head]
  end
end
