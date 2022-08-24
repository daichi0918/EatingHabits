8.times do |n|
  user = User.new(
    name: "User_#{n}",
    email: "example#{n}@example.co.jp",
    encrypted_password: "password#{n}"
  )

  5.times do |m|
    user.lists.build(
      name: "samplelist#{m}"
    )
  end

  user.save!
end
