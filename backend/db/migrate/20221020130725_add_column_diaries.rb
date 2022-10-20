class AddColumnDiaries < ActiveRecord::Migration[7.0]
  def change
    add_column :diaries, :image, :string
  end
end
