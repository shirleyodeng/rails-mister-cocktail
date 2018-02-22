class Dose < ApplicationRecord
  belongs_to :cocktail
  belongs_to :ingredient
  validates :description, presence: true
  validates_uniqueness_of :cocktail, scope: [:ingredient]
  accepts_nested_attributes_for :ingredient
end
