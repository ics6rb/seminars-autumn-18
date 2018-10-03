require 'minitest/autorun'
require_relative 'src'

class Return42Test < MiniTest::Unit::TestCase
  def test_returns_42
    assert_equal 42, return_42
  end
end
