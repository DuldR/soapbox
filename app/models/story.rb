# == Schema Information
#
# Table name: stories
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Story < ApplicationRecord
    # PRobably need some code here for ocmments

    has_many :comments

    has_many :story_follows, foreign_key: "story_id", dependent: :destroy
    has_many :followed_users, through: :story_follows, source: :user
end
