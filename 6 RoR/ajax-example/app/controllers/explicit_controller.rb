class ExplicitController < ApplicationController
  def in; end

  def ajax
    m = params[:m]
    @result = if !m || m.empty?
                'Введите число'
              else
                reverse_number m
              end
    respond_to do |format|
      format.json { render json: { result: @result } }
    end
  end

  private

  def reverse_number(number)
    number.to_i(10).to_s(2).reverse.to_i(2)
  end
end
