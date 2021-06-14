class CreateFollows < ActiveRecord::Migration[6.1]
  def change
    create_table :follows do |t|

      t.bigint :followable_id, null: false
      t.string :followable_type, null: false
      t.bigint :follower_id, null: false
      t.string :follower_type, null: false



      t.timestamps
    end

    add_index :follows, :followable_id
    add_index :follows, :follower_id
  end
end
