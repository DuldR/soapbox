class DropFollowandStory < ActiveRecord::Migration[6.1]
  def change
    drop_table :follows
    drop_table :story_follows
  end
end
