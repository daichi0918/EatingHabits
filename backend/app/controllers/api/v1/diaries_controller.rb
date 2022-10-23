module Api
  module V1
    class DiariesController < ApplicationController
      def index
        # diaries = Diary.joins(:mealtime).select('diaries.*, mealtimes.name as mealtimeName, mealtimes.color as mealtimecolor').where(user_id: params[:user_id])

        diaries = Diary.joins(:mealtime).select('diaries.id as id, concat(mealtimes.name,":",diaries.main_menu) as title, diaries.eat_on as start, mealtimes.color as color').where(user_id: params[:user_id])

        render json: {
          diaries: diaries
        }, status: :ok
      end
    end
  end
end
