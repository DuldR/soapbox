class RemoveTopicsFromStories < ActiveRecord::Migration[6.1]
  def change
    remove_column :stories, :topic
  end
end
