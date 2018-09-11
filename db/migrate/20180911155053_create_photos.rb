class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :img_url, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.integer :artist_id, null: false
      t.datetime :created_at, null: false
      t.string :updated_at, null: false
    end
    add_index :photos, :artist_id, unique: true
  end
end
