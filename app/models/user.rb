# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  name            :string           not null
#  email           :string           not null
#  profile_url     :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :name, :profile_url, :email,
    :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :email, :session_token, :password_digest, uniqueness: true

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :photos,
    foreign_key: :artist_id,
    class_name: "Photo"

  has_many :comments,
    foreign_key: :author_id,
    class_name: "Comment"
  # has_many :follows
  has_many :likings,
    foreign_key: :liker_id,
    class_name: :Like

  has_many :followings,
    foreign_key: :followee_id,
    class_name: :Follow

  has_many :followed_bys,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :followers,
    through: :followings,
    source: :follower

  has_many :followees,
    through: :followed_bys,
    source: :followee

  has_many :liked_photos,
    through: :likings,
    source: :photo

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  private

  def generate_session_token
    SecureRandom.urlsafe_base64
  end
end
