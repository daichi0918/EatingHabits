module Api
  module V1
    class CommentsController < ApplicationController
      before_action :authenticate_api_v1_user!
      before_action :set_comment, only: %i[destroy]

      def create
        comment = Comment.new(comment_params)
        if comment.save
          # comments_count = Comment.where(post_id: params[:post_id]).count
          # render json: { status: 'SUCCESS', data: comment_count }
          render json: { status: 'SUCCESS' }
        else
          render json: { status: 'ERROR', data: comment.errors }
        end
      end

      def destroy
        @comment.destroy
        render json: { status: 'SUCCESS', message: 'Deleted the comment', data: @comment }
      end

      private

      def set_comment
        # @user = User.find_by(id: current_api_v1_user.id)
        # @post = Post.find(params[:post_id])
        @comment = Comment.find(params[:id])
        # @like = Like.find_by(user_id: params[:user_id], post_id: params[:post_id])
      end

      def comment_params
        params.permit(:user_id, :post_id, :text, :image)
      end
    end
  end
end
