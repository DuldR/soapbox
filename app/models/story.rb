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

    def create_date
        date = self.created_at

        min = Time.now.beginning_of_year
        max = Time.now.end_of_year

        if date.between?(min, max)
            return date.strftime("%d %b")
        else
            return date.strftime("%d %B %Y")
        end

    end
end
