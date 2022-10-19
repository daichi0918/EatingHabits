module Api
  module V1
    class BookmarksController < ApplicationController
      before_action :set_bookmark, only: %i[destroy]

      def create
        bookmark = Bookmark.new(bookmark_params)
        if bookmark.save
          # bookmarks_count = Favorite.where(post_id: params[:post_id]).count
          # render json: { status: 'SUCCESS', data: bookmark_count }
          render json: { status: 'SUCCESS' }
        else
          render json: { status: 'ERROR', data: bookmark.errors }
        end
      end

      def destroy
        @bookmark.destroy
        render json: { status: 'SUCCESS', message: 'Deleted the bookmark', data: @bookmark }
      end

      private

      def set_bookmark
        # @user = User.find_by(id: current_api_v1_user.id)
        # @user = User.find(id: params[:user_id])
        @bookmark = Bookmark.find(user_id: @user.id, post_id: params[:post_id])
        # @bookmark = Bookmark.find(params[:id])
        # @like = Like.find_by(user_id: params[:user_id], post_id: params[:post_id])
      end

      def bookmark_params
        params.permit(:user_id,:post_id)
      end
    end
  end
end
