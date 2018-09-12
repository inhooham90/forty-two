class Like < ApplicationRecord
  validates :photo_id, :liker_id, presence: true

  # belongs_to :photo,
  #   class_name: 'User',
  #   foreign_key: :photo_id
  #
  # has_many :comments
  # has_many :likes


end
