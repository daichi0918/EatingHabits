class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :bookmarks, dependent: :destroy
  has_many :favorites, dependent: :destroy

  validates :text, presence: true
  validates :title, presence: true 
end
