module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_api_v1_user!
      before_action :set_user, only: %i[edit update]
      def index
        users = User.all

        render json: {
          users: users
        }, status: :ok
      end

      def edit
        render json: {
          user: @user
        }, status: :ok
      end

      def update
        if @user.update(user_params)
          render json: { status: 'SUCCESS', message: 'Updated the user', data: @user }
        else
          render json: { status: 'SUCCESS', message: 'Not updated', data: @user.errors }
        end
      end

      private

      def set_user
        @user = User.find(params[:id])
      end

      def user_params
        params.permit(:id, :name, :gender, :birthday, :image, :memo)
      end
    end
  end
end
