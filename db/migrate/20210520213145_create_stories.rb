class CreateStories < ActiveRecord::Migration[6.1]
  def change
    create_table :stories do |t|

      t.string :body, null: false
      t.integer :author_id, null: false

      t.timestamps
    end

    add_index :stories, :author_id
  end
end
