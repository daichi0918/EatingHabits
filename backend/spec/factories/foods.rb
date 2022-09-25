FactoryBot.define do
  factory :food do
    user_id { 1 }
    classification_id { 1 }
    quantity { 5 }
    name { 'rspecfood' }
    expired_at { '2022-09-20' }
  end
end
