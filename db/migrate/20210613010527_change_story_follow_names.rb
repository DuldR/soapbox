class ChangeStoryFollowNames < ActiveRecord::Migration[6.1]
  def change

    rename_column :story_follows, :follower_id, :story_id
    rename_column :story_follows, :followed_id, :user_id
  end
end
