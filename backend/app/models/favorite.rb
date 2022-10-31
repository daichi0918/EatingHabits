class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :post

  validates :post_id, uniqueness: { scope: :user_id }

  scope :filtered_by_post, ->(post_id) { where(post_id: post_id) if post_id }
end
