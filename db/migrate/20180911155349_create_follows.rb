class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :follower_id, null: false
      t.integer :followee_id, null: false
      t.datetime :created_at, null: false
      t.string :updated_at, null: false
    end
    add_index :follows, [:follower_id, :followee_id], :unique => true
  end
end
