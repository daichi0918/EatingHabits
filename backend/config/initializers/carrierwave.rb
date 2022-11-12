require 'dotenv'
Dotenv.load

CarrierWave.configure do |config|
  config.asset_host = ENV['HOST']
  config.storage = :file
  config.cache_storage = :file
end
