class Billboard < ApplicationRecord
  has_many :artists, dependent: :destroy

  validates :title, :description, presence: true, length: {minimun: 2}
end
