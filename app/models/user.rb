# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    
    attr_reader :password

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :email, presence: true
    validates :email, uniqueness: true
    validates :password_digest, presence: { message: "Password can't be blank" }
    validates :password, length: { minimum: 6, allow_nil: true }

    has_many :follows, as: :follower

    has_many :followed_users, through: :follows, source: :followable, source_type: "User"
    has_many :followed_stories, through: :follows, source: :followable, source_type: "Story"


    before_validation(on: :create) do
        :ensure_session_token
    end
  

    after_initialize do |user|
        ensure_session_token
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)

        if user.nil?
            return nil
        end

        if user.is_password?(password)
            return user
        else
             return nil
        end
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        check = BCrypt::Password.new(password_digest)
        check.is_password?(password)
    end


    private
    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
end
