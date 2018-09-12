class Follow < ApplicationRecord
  validates :followee_id, :follower_id, presence: true

  # belongs_to :followee,
  #   class_name: 'User',
  #   foreign_key: :followee_id
  #
  # belongs_to :follower,
  #   class_name: 'User',
  #   foreign_key: :follower_id


end
