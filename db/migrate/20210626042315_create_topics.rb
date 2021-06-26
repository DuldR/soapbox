class CreateTopics < ActiveRecord::Migration[6.1]
  def change
    create_table :topics do |t|
      t.string "topic_name", null: false
      t.timestamps
    end

    add_index :topics, :topic_name
  end
end
