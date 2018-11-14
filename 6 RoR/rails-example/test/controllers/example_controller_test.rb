require 'test_helper'

class ExampleControllerTest < ActionDispatch::IntegrationTest
  test 'should get in' do
    get example_in_url
    assert_response :success
    assert_template 'example/in'
  end

  test 'should get out' do
    get example_out_url
    assert_response :success
    assert_template 'example/out'
  end

  test 'should get 3 for 6' do
    get example_out_url, params: { m: 6 }
    assert_equal 3, assigns[:result]
  end

  test 'should get error for no number' do
    get example_out_url
    assert_equal 'Введите число', assigns[:result]
  end

end
