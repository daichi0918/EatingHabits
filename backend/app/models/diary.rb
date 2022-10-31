class Diary < ApplicationRecord
  # mount_uploader :image, ImageUploader

  belongs_to :user
  belongs_to :mealtime

  validates :eat_on, :main_menu, presence: true
end
