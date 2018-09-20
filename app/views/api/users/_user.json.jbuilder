json.extract! user, :id, :username, :name, :profile_url
# json.photo_ids user.photos.pluck(:id)
json.followers user.followers.pluck(:id)
json.following user.followed_bys.pluck(:id)
