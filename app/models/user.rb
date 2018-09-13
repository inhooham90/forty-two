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

  # has_many :comments
  # has_many :follows
  # has_many :likes,

  #
  # has_many :followers,
  #   through: :follows,
  #   source: :follower

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
