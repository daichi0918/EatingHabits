require 'rails_helper'


RSpec.describe 'Foods', type: :request do
  let(:user) { create(:user) }
  let(:headers) do
    login user
    get_auth_params_from_login_response_headers(response)
  end
  describe 'GET /foods' do
    it 'works! (now write some real specs)' do
      get api_v1_user_foods_path(user_id: user.id), headers: headers
      expect(response).to have_http_status(200)
    end
  end

  describe 'Post /food' do
    it 'works! (now write some real specs)' do
      food = create(:food)
      expect do
        post 'http://localhost:3002/api/v1/users/22/foods',
             params: { user_id: food.user_id, classification_id: food.classification_id, quantity: food.quantity,
                       name: food.name, expired_at: food.expired_at }
      end.to change(Food, :count).by(+1)
      expect(response.status).to eq(200)
    end
  end

  describe 'Put /food' do
    it 'works! (now write some real specs)' do
      food = create(:food)
      put 'http://localhost:3002/api/v1/users/22/foods/1',
          params: { user_id: food.user_id, classification_id: food.classification_id, quantity: food.quantity,
                    name: food.name, expired_at: food.expired_at }
      expect(response.status).to eq(200)
    end
  end

  describe 'DELETE /food' do
    it 'works! (now write some real specs)' do
      food = create(:food)
      expect { delete "http://localhost:3002/api/v1/users/22/foods/#{food.id}" }.to change(Food, :count).by(-1)
      expect(response.status).to eq(200)
    end
  end
end
