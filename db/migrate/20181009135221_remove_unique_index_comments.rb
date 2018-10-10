class RemoveUniqueIndexComments < ActiveRecord::Migration[5.2]
  def change
    remove_index :comments, :photo_id
    remove_index :comments, :author_id
  end
end
