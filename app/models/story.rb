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
    belongs_to :user
    

    has_many :follows, as: :followable
    has_many :story_topics
    has_many :topics, through: :story_topics


    def time_to_read
        # 125 words per minute
        # Give a mulitple for the minutes to read
        self.body.split.size / 125
    end
end
