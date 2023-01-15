# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  mount_uploader :image, ImageUploader

  # VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  has_many :lists, dependent: :destroy
  has_many :foods, dependent: :destroy
  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :bookmarks, dependent: :destroy
  has_many :favorites, dependent: :destroy

  has_many :relationships, class_name: 'Relationship', foreign_key: 'following_id', dependent: :destroy
  has_many :reverse_of_relationships, class_name: 'Relationship', foreign_key: 'followed_id', dependent: :destroy

  has_many :followings, through: :relationships, source: :followed
  has_many :followers, through: :reverse_of_relationships, source: :following

  # validates :name, :email, :encrypted_password, :gender, presence: true
  validates :name, :email, :gender, presence: true
  validates :name, length: { maximum: 30 }
  validates :email, presence: true, length: { maximum: 100 }, uniqueness: true
  # , format: { with: VALID_EMAIL_REGEX }
  validates :encrypted_password, presence: true, length: { minimum: 6 }

  # validates :image, content_type: { in: %w[image/jpeg image/gif image/png],
  #                                   message: 'must be a valid image format' },
  #                   size: { less_than: 1.megabytes,
  #                           message: 'should be less than 1MB' }

  # enum gender: { blank:0, man: 1, woman: 2 }

  # フォローしたときの処理
  def follow(user_id)
    relationships.create(followed_id: user_id)
  end

  # フォローを外すときの処理
  def unfollow(user_id)
    relationships.find_by(followed_id: user_id).destroy
  end

  # フォローしているか判定
  def following?(user)
    followings.include?(user)
  end
end
