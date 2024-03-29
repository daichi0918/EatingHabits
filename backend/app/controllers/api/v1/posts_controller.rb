module Api
  module V1
    class PostsController < ApplicationController
      before_action :authenticate_api_v1_user!
      before_action :set_post, only: %i[edit update destroy]
      # before_action :current_api_v1_user, :api_v1_user_signed_in?

      def index
        @posts = Post.all.order(created_at: 'DESC')
      end

      def create
        post = Post.new(post_params)
        if post.save
          render json: { status: 'SUCCESS', data: post }
        else
          render json: { status: 'ERROR', data: post.errors }
        end
      end

      def edit
        render json: {
          post: @post
        }, status: :ok
      end

      def update
        if @post.update(post_params)
          render json: { status: 'SUCCESS', message: 'Updated the post', data: @post }
        else
          render json: { status: 'SUCCESS', message: 'Not updated', data: @post.errors }
        end
      end

      def destroy
        @post.destroy
        render json: { status: 'SUCCESS', message: 'Deleted the post', data: @post }
      end

      private

      def set_post
        @post = Post.find(params[:id])
      end

      def post_params
        params.permit(:user_id, :text, :image, :title)
      end
    end
  end
end
