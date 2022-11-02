class Post < ApplicationRecord
  attr_accessor :current_user
  mount_uploader :image, ImageUploader


  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :bookmarks, dependent: :destroy
  has_many :favorites, dependent: :destroy

  validates :text, presence: true
  validates :title, presence: true

  def favorited_by?
    favorites.exists?(user_id: current_user.id)
  end

  def bookmarked_by?(user)
    bookmarks.exists?(user_id: user.id)
  end
end
