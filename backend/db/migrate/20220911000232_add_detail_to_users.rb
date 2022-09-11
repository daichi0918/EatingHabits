class AddDetailToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :gender, :integer
    add_column :users, :memo, :string
  end
end
