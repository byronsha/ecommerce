class Api::ProductsController < ApplicationController
  def index
    product = Product

    if params[:brands]
      product = product.in_brands(params[:brands])
    end

    if params[:categories]
      product = product.in_categories(params[:categories])
    end

    @products = product.all
  end
end
