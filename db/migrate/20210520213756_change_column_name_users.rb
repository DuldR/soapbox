class ChangeColumnNameUsers < ActiveRecord::Migration[6.1]
  def change
    rename_column :stories, :author_id, :user_id
  end
end
