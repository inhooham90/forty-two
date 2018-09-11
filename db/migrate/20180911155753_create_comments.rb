class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :photo_id, null: false
      t.datetime :created_at, null: false
      t.string :updated_at, null: false
    end
    add_index :comments, :author_id, unique: true
    add_index :comments, :photo_id, unique: true
  end
end
