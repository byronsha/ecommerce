class Product < ActiveRecord::Base
  belongs_to :brand
  belongs_to :category

  def self.in_brands(brands)
    self.joins(:brand).where('brands.name IN (?)', brands)
  end

  def self.in_categories(categories)
    self.joins(:category).where('categories.name IN (?)', categories)
  end
end
