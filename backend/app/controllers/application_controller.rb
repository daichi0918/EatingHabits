class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include RackSessionFixController
  # skip_before_action :verify_authenticity_token
  # helper_method :current_api_v1_user, :api_v1_user_signed_in?
  # before_action :current_api_v1_user, :api_v1_user_signed_in?
  before_action :authenticate_api_v1_user!
end
