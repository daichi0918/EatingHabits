FactoryBot.define do
  factory :user do
    name { 'aaa' }
    email { 'example@example.co.jp' }
    password { 'password' }
    password_confirmation { 'password' }
    gender {0}
  end
end
