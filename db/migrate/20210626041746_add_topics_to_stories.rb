class AddTopicsToStories < ActiveRecord::Migration[6.1]
  def change

    add_column :stories, :topic, :string, null: false
    add_index :stories, :topic
  end
end
