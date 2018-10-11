# == Schema Information
#
# Table name: cover_pictures
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  photo_url  :string           not null
#  created_at :datetime         not null
#  updated_at :string           not null
#

class CoverPicture < ApplicationRecord
  validates :user_id, :photo_url, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
