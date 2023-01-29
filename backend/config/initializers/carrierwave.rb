require 'dotenv'
Dotenv.load

CarrierWave.configure do |config|
  # config.asset_host = ENV['HOST']
  # config.asset_host = 'http://localhost:3002'
  config.asset_host = 'http://160.251.98.255:3002'
  config.storage = :file
  config.cache_storage = :file
end
