class Comment < ApplicationRecord
  validates :img_url, :title, :description, :artist_id, presence: true

  # belongs_to :author,
  #   class_name: 'User',
  #   foreign_key: :author_id
  #
  # belongs_to :follower,
  #   class_name: 'User',
  #   foreign_key: :follower_id


end
