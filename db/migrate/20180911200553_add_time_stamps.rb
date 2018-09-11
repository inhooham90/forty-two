class AddTimeStamps < ActiveRecord::Migration[5.2]
  def change
    add_timestamps :users, null: false
    add_timestamps :follows, null: false
    add_timestamps :comments, null: false
    add_timestamps :likes, null: false
    add_timestamps :photos, null: false

  end
end
