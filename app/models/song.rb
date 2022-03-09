class Song < ApplicationRecord
  belongs_to :artist

  validates :title, :duration, presence: true
end
