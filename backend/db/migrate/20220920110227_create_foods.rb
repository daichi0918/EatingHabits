class CreateFoods < ActiveRecord::Migration[7.0]
  def change
    create_table :foods do |t|
      t.references :user, null: false, foreign_key: true
      t.references :classification, null: false, foreign_key: true
      t.string :name, null: false
      t.integer :quantity, null: false
      t.date :expired_at, null: false
      t.datetime :notified_at
      t.string :image
      t.string :memo

      t.timestamps
    end
  end
end
