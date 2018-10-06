class Like < ApplicationRecord
  validates :photo_id, :liker_id, presence: true

  belongs_to :photo,
    class_name: 'Photo',
    foreign_key: :photo_id

  belongs_to :liker,
    class_name: 'User',
    foreign_key: :liker_id
end
