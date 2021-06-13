class CreateStoryFollows < ActiveRecord::Migration[6.1]
  def change
    create_table :story_follows do |t|

      t.integer :follower_id, null: false
      t.integer :followed_id, null: false

      t.timestamps
    end

    add_index :story_follows, :follower_id
    add_index :story_follows, :followed_id
    add_index :story_follows, [:follower_id, :followed_id], unique: true
  end
end
