# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  author_id  :integer          not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  body       :string
#

class Comment < ApplicationRecord
  validates :author_id, :photo_id, presence: true

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id

  belongs_to :photo,
    class_name: 'Photo',
    foreign_key: :photo_id

end
