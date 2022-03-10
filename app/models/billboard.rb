class Billboard < ApplicationRecord
  has_many :artists, dependent: :destroy

  validates :title, :description, presence: true, length: {minimum: 2}
end
