class CreateStoryTopics < ActiveRecord::Migration[6.1]
  def change
    create_table :story_topics do |t|
      t.integer "story_id", null: false
      t.integer "topic_id", null: false
      t.timestamps
    end

    add_index :story_topics, :story_id
    add_index :story_topics, :topic_id
  end
end
