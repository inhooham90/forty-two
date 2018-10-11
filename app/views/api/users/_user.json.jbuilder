json.extract! user, :id, :username, :name, :profile_url, :cover_picture, :profile_picture
# json.photo_ids user.photos.pluck(:id)
json.followers user.followers.pluck(:id)
json.followees user.followees.pluck(:id)
