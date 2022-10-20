class AddColumnMealtimes < ActiveRecord::Migration[7.0]
  def change
    add_column :mealtimes, :color, :string, null: false
  end
end
