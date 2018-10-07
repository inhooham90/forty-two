# == Schema Information
#
# Table name: follows
#
#  id          :bigint(8)        not null, primary key
#  follower_id :integer          not null
#  followee_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ApplicationRecord
  validates :followee_id, :follower_id, presence: true

  belongs_to :followee,
    class_name: 'User',
    foreign_key: :followee_id

  belongs_to :follower,
    class_name: 'User',
    foreign_key: :follower_id


end
