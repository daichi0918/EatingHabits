CarrierWave.configure do |config|
  config.asset_host = "http://localhost:3002"
  config.storage = :file
  config.cache_storage = :file
end
