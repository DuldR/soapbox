class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|

      t.integer :user_id, null: false
      t.integer :story_id, null: false


      t.timestamps
    end

    add_index :comments, :user_id
    add_index :comments, :story_id
  end
end
