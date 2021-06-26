class DropStoryTopic < ActiveRecord::Migration[6.1]
  def change

    drop_table :storytopics
  end
end
