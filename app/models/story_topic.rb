class StoryTopic < ApplicationRecord
    belongs_to :story
    belongs_to :topic
end
