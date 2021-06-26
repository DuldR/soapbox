class CreateStorytopics < ActiveRecord::Migration[6.1]
  def change
    create_table :storytopics do |t|
      t.integer "story_id", null: false
      t.integer "topic_id", null: false
      t.timestamps
    end

    add_index :storytopics, :story_id
    add_index :storytopics, :topic_id
  end
end
