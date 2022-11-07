json.set! :posts do
  json.array! @posts do |post|
    json.extract! post,:user, :id, :user_id, :text, :title, :image, :created_at
    post.current_user = current_api_v1_user
    json.favorited_by? post.favorited_by?
  end
end
