class CreateDiaries < ActiveRecord::Migration[7.0]
  def change
    create_table :diaries do |t|
      t.references :user, null: false, foreign_key: true
      t.references :classification, null: false, foreign_key: true
      t.string :eat_on, null: false
      t.string :main_menu, null: false
      t.text :side_menu

      t.timestamps
    end
  end
end
