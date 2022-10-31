module Api
  module V1
    class FavoritesController < ApplicationController
      before_action :set_favorite, only: %i[destroy]

      def index
        render json: Favorite.filter_by_post(params[:post_id]).select(:id, :user_id, :post_id)
      end

      def create
        favorite = Favorite.new(favorite_params)
        if favorite.save
          # favorites_count = Favorite.where(post_id: params[:post_id]).count
          # render json: { status: 'SUCCESS', data: favorite_count }
          render json: { status: 'SUCCESS', data: favorite }
        else
          render json: { status: 'ERROR', data: favorite.errors }
        end
      end

      def destroy
        @favorite.destroy
        render json: { status: 'SUCCESS', message: 'Deleted the favorite', data: @favorite }
      end

      private

      def set_favorite
        # @user = User.find_by(id: current_api_v1_user.id)
        # @user = User.find(id: params[:user_id])
        @favorite = Favorite.find(params[:id])
        # @favorite = Favorite.find(params[:id])
        # @like = Like.find_by(user_id: params[:user_id], post_id: params[:post_id])
      end

      def favorite_params
        params.permit(:user_id, :post_id)
      end
    end
  end
end
