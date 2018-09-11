class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :name, null: false
      t.string :email, null: false
      t.string :profile_url, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.datetime :created_at, null: false
      t.string :updated_at, null: false
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end
