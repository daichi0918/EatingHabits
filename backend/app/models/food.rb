class Food < ApplicationRecord
  belongs_to :user
  belongs_to :classification 

  validates :name, :quantity, :expired_at, presence: true
end
