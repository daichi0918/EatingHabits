module Api
  module V1
    class PostsController < ApplicationController
      before_action :set_food, only: %i[edit update destroy]

      def index
        posts = Post.all

        render json: {
          posts: posts
        }, status: :ok
      end

      def create
        post = Post.new(post_params)
        if post.save
          render json: { status: 'SUCCESS', data: post }
        else
          render json: { status: 'ERROR', data: post.errors }
        end
      end

      private

      def set_post
        @post = Post.find(params[:id])
      end

      def post_params
        params.permit(:user_id,:text,:image)
      end
    end
  end
end
