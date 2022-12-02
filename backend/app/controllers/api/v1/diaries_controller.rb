module Api
  module V1
    class DiariesController < ApplicationController
      # before_action :authenticate_api_v1_user!
      before_action :set_diary, only: %i[edit update destroy]
      def index
        # diaries = Diary.joins(:mealtime).select('diaries.*, mealtimes.name as mealtimeName, mealtimes.color as mealtimecolor').where(user_id: params[:user_id])

        diaries = Diary.joins(:mealtime).select('diaries.id as id, concat(mealtimes.name," : ",diaries.main_menu) as title, diaries.eat_on as start, mealtimes.color as color').where(user_id: params[:user_id])

        render json: {
          diaries: diaries
        }, status: :ok
      end

      def create
        diary = Diary.new(diary_params)
        if diary.save
          render json: { status: 'SUCCESS', data: diary }
        else
          render json: { status: 'ERROR', data: diary.errors }
        end
      end

      def edit
        render json: {
          diary: @diary
        }, status: :ok
      end

      def update
        if @diary.update(diary_params)
          render json: { status: 'SUCCESS', message: 'Updated the diary', data: @diary }
        else
          render json: { status: 'SUCCESS', message: 'Not updated', data: @diary.errors }
        end
      end

      def destroy
        @diary.destroy
        render json: { status: 'SUCCESS', message: 'Deleted the diary', data: @diary }
      end

      private

      def set_diary
        @diary = Diary.find(params[:id])
      end

      def diary_params
        params.permit(:user_id, :mealtime_id, :eat_on, :main_menu, :side_menu, :image)
      end
    end
  end
end
