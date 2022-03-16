class Artist < ApplicationRecord
  belongs_to :billboard
  has_many :songs, dependent: :destroy

  validates :title, presence: true, length: {minimum: 2}
  validates :rank, presence: true, numericality: {less_than_or_equal_to:10}

  
end
