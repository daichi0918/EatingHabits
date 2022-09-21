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

Classification.create(name: '料理')
Classification.create(name: '食材')
Classification.create(name: 'その他')
