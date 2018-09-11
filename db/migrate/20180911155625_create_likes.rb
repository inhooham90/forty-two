class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false
      t.integer :photo_id, null: false
      t.datetime :created_at, null: false
      t.string :updated_at, null: false
    end
    add_index :likes, [:liker_id, :photo_id], :unique => true
  end
end
