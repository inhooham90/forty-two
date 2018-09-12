class Photo < ApplicationRecord
  validates :img_url, :title, :description, :artist_id, presence: true

  # belongs_to :artist,
  #   class_name: 'User',
  #   foreign_key: :artist_id,
  #   primary_key: :id
  #
  # has_many :comments
  # has_many :likes


end
