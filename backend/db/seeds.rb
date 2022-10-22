# 8.times do |n|
#   user = User.new(
#     name: "User_#{n}",
#     email: "example#{n}@example.co.jp",
#     password: "password#{n}"
#   )

#   5.times do |m|
#     user.lists.build(
#       name: "samplelist#{m}"
#     )
#   end

#   user.save!
# end

# Classification.create(name: '料理')
# Classification.create(name: '食材')
# Classification.create(name: 'その他')

# User.all.each do |user|
#   date = Date.new(2022, 9, 21)
#   user.foods.create!(
#     classification_id: 1,
#     name: '秋刀魚',
#     quantity: 3,
#     expired_at: date
#   )
# end

# 3.times do |n|
#   post = Post.new(
#     user_id: 2,
#     title: "タイトル#{n}",
#     text: "sampletext#{n}"
#   )

#   post.save!

# end

# Mealtime.create(name: '朝',color: '#E3C576')
# Mealtime.create(name: '昼',color: '#67a8dd')
# Mealtime.create(name: '夕',color: '#F08300')
# Mealtime.create(name: 'その他',color: '#734e30')


# 3.times do |n|
#   diary = Diary.new(
#     user_id: 2,
#     title: "タイトル#{n}",
#     text: "sampletext#{n}"
#   )

#   post.save!

# end

Diary.create!(user_id: 22, mealtime_id: 1, eat_on: '2022-10-20', main_menu: 'りんご')
Diary.create!(user_id: 22, mealtime_id: 2, eat_on: '2022-10-20', main_menu: 'とんかつ')
Diary.create!(user_id: 22, mealtime_id: 3, eat_on: '2022-10-20', main_menu: 'ぶりしゃぶ')
Diary.create!(user_id: 22, mealtime_id: 4, eat_on: '2022-10-20', main_menu: 'ナッツ')
