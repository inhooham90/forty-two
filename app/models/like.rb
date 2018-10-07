# == Schema Information
#
# Table name: likes
#
#  id         :bigint(8)        not null, primary key
#  liker_id   :integer          not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
  validates :photo_id, :liker_id, presence: true

  belongs_to :photo,
    class_name: 'Photo',
    foreign_key: :photo_id

  belongs_to :liker,
    class_name: 'User',
    foreign_key: :liker_id
end
