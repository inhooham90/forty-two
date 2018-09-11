class ConfigureTimeStampItems < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :created_at
    remove_column :users, :updated_at
    remove_column :photos, :created_at
    remove_column :photos, :updated_at
    remove_column :follows, :created_at
    remove_column :follows, :updated_at
    remove_column :likes, :created_at
    remove_column :likes, :updated_at
    remove_column :comments, :created_at
    remove_column :comments, :updated_at
  end
end
