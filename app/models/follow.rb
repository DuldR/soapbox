class Follow < ApplicationRecord
    belongs_to :followable, polymorphic: true
    belongs_to :follower, polymorphic: true


    # belongs_to :story
    # belongs_to :user


    # Then in the controller call the necessary method using switch case
    # scope :followable_user, ->(id) { where(followable_id: id, followable_type: "User") }
    # scope :followable_story, ->(id) { where(followable_id: id, followable_type: "Story") }

    # scope :follower_user, ->(id) { where(follower_id: id, followable_type: "User") }

    scope :followed_users, ->{ where(followable_type: "User") }
end