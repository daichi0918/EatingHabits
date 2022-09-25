class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  # skip_before_action :verify_authenticity_token
  # helper_method :current_api_v1_user, :api_v1_user_signed_in?
end
