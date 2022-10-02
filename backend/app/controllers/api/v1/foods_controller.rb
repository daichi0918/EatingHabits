module Api
  module V1
    class FoodsController < ApplicationController
      before_action :set_food, only: %i[edit update destroy]

      def index
        user = User.find(params[:user_id])
        foods = user.foods

        render json: {
          foods: foods
        }, status: :ok
      end

      def create
        food = Food.new(food_params)
        if food.save
          render json: { status: 'SUCCESS', data: food }
        else
          render json: { status: 'ERROR', data: food.errors }
        end
      end

      def edit
        render json: {
          food: @food
        }, status: :ok
      end

      def update
        if @food.update(food_params)
          render json: { status: 'SUCCESS', message: 'Updated the food', data: @food }
        else
          render json: { status: 'SUCCESS', message: 'Not updated', data: @food.errors }
        end
      end

      def destroy
        @food.destroy
        render json: { status: 'SUCCESS', message: 'Deleted the food', data: @food }
      end

      private

      def set_food
        @food = Food.find(params[:id])
      end

      def food_params
        params.permit(:user_id,:classification_id, :name, :quantity, :expired_at, :notified_at, :image, :memo)
      end
    end
  end
end
