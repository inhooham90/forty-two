class RemoveIndexOnArtistId < ActiveRecord::Migration[5.2]
  def change
    remove_index :photos, :artist_id
  end
end
