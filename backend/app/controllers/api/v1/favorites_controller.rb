module Api
  module V1
    class FavoritesController < ApplicationController
      before_action :authenticate_api_v1_user!
      before_action :set_favorite, only: %i[destroy]

      def index
        render json: Favorite.filtered_by_post(params[:post_id]).select(:id, :user_id, :post_id)
      end

      def create
        favorite = Favorite.new(favorite_params)
        if favorite.save
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
        @favorite = Favorite.find(params[:id])
      end

      def favorite_params
        params.permit(:user_id, :post_id)
      end
    end
  end
end
