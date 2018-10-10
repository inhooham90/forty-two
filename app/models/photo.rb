# == Schema Information
#
# Table name: photos
#
#  id          :bigint(8)        not null, primary key
#  img_url     :string           not null
#  title       :string           not null
#  description :string           not null
#  artist_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ApplicationRecord
  validates :img_url, :title, :description, :artist_id, presence: true

  belongs_to :artist,
    class_name: 'User',
    foreign_key: :artist_id

  has_many :comments,
    class_name: 'Comment',
    foreign_key: :photo_id

  has_many :commenters,
    through: :comments,
    source: :author


  has_many :likes,
    foreign_key: :photo_id,
    class_name: :Like

  has_many :likers,
    through: :likes,
    source: :liker


end
