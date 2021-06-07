class AddCommentBody < ActiveRecord::Migration[6.1]
  def change
    add_column :comments, :body, :string
    change_column_null :comments, :body, false
  end
end
