module Api
  module V1
    class PostsController < ApplicationController
      before_action :authenticate_api_v1_user!
      before_action :set_post, only: %i[edit update destroy]
      # before_action :current_api_v1_user, :api_v1_user_signed_in?

      def index
        posts = Post.joins(:user).select('posts.*, users.name as userName,users.image as userImage').order(created_at: 'DESC')

        # p current_api_v1_user


        # @posts = Post.all.order(created_at: 'DESC')

        # posts.current_user = current_api_v1_user

        # posts = Post.all.includes(:user).order(created_at: 'DESC')
        # posts = Post.all.joins(:user).select('posts.*, users.name as userName,users.image as userImage').order(created_at: 'DESC')
        a = posts.map{
          |post| 
          post.current_user = current_api_v1_user
          custom_post = post.attributes()
          custom_post.store("favorited", post.favorited_by?)
          # custom_post["favorited?"] = post.favorited_by?
          # post["favorited?"] = post.favorited_by?
          # return custom_post
          custom_post
        }

        # p a


        render json: {
            posts: a
        }

        # render 'index', formats: 'json', handlers: 'jbuilder'

        # render json: a
        
        # , includes: :user, methods: :favorited_by?

        # 

        # res.data

        

        # render json: {
        #   posts: posts
        # }, status: :ok
        # render json :{...}, include: [:favarits]
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
