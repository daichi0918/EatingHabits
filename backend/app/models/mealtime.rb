class Mealtime < ApplicationRecord
  has_many :diaries

  validates :name, presence: true
end
