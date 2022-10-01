class Food < ApplicationRecord
  mount_uploader :image, ImageUploader
  
  belongs_to :user
  belongs_to :classification

  validates :name, :quantity, :expired_at, presence: true
end
