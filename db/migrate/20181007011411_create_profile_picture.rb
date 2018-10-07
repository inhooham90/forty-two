class CreateProfilePicture < ActiveRecord::Migration[5.2]
  def change
    create_table :profile_pictures do |t|
      t.integer :user_id, null: false
      t.string :photo_url, null: false
      t.datetime :created_at, null: false
      t.string :updated_at, null: false
    end
    add_index :profile_pictures, :user_id, unique: true
    add_index :profile_pictures, :photo_url, unique: true
  end
end
