require 'rails_helper'

RSpec.describe ExampleController, type: :controller do

  describe 'GET #in' do
    it 'returns http success' do
      get :in
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET #out' do
    it 'returns http success' do
      get :out
      expect(response).to have_http_status(:success)
    end

    it 'returns 3 if input was 6' do
      get :out, params: { m: 6 }
      expect(assigns[:result]).to eq 3
    end

    it 'returns error if no input was provided' do
      get :out
      expect(assigns[:result]).to eq 'Введите число'
    end
  end

end
