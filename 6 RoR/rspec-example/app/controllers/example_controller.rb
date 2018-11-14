class ExampleController < ApplicationController
  def in; end

  def out
    m = params[:m]
    @result = if !m || m.empty?
                'Введите число'
              else
                reverse_number m
              end
  end

  private

  def reverse_number(number)
    number.to_i(10).to_s(2).reverse.to_i(2)
  end
end
