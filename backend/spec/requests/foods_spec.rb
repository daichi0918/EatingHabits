require 'rails_helper'

RSpec.describe "Foods", type: :request do
  describe "GET /foods" do
    it "works! (now write some real specs)" do
      get 'http://localhost:3002/api/v1/users/1/foods'
      expect(response).to have_http_status(200)
    end
  end

  describe 'Post /food' do
    it 'works! (now write some real specs)' do
      food = create(:food)
      expect do
        post 'http://localhost:3002/api/v1/users/1/foods',
             params: { user_id: food.user_id, classification_id: food.classification_id, quantity: food.quantity, name: food.name, expired_at: food.expired_at}
      end.to change(Food, :count).by(+1)
      expect(response.status).to eq(200)
    end
  end

  describe 'Put /food' do
    it 'works! (now write some real specs)' do
      food = create(:food)
      put 'http://localhost:3002/api/v1/users/1/foods/1',
          params: { user_id: food.user_id, classification_id: food.classification_id, quantity: food.quantity, name: food.name, expired_at: food.expired_at}
      expect(response.status).to eq(200)
    end
  end

  describe 'DELETE /food' do
    it 'works! (now write some real specs)' do
      food = create(:food)
      expect { delete "http://localhost:3002/api/v1/users/1/foods/#{food.id}" }.to change(Food, :count).by(-1)
      expect(response.status).to eq(200)
    end
  end
end

