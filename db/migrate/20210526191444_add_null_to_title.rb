class AddNullToTitle < ActiveRecord::Migration[6.1]
  def change
    change_column_null :stories, :title, false
  end
end
