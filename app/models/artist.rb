class Artist < ApplicationRecord
  belongs_to :billboard
  has_many :songs, dependent: :destroy

  validates :title, presence: true
  validates :rank, presence: true
  # validates :rank, uniqueness: true


  
end
