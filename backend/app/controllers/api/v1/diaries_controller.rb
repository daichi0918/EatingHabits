module Api
  module V1
    class DiariesController < ApplicationController
      def index
        diaries = Diary.joins(:mealtime).select('diaries.*,mealtimes.name as mealtime,mealtimes.color as mealtimecolor')

        render json: {
          diaries: diaries
        }, status: :ok
      end
    end
  end
end
