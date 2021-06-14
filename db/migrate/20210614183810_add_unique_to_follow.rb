class AddUniqueToFollow < ActiveRecord::Migration[6.1]
  def change
    add_index :follows, [:followable_id, :followable_type, :follower_id], unique: true, name: 'unique_follow_index'
  end
end
