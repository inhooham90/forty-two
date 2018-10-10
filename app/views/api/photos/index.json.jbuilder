json.photos do
  @photos.each do |photo|
    json.set! photo.id do
      json.partial! 'api/photos/photo', photo: photo
    end
  end
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username, :name, :profile_url
      json.photos user.photos.pluck(:id)
      json.followers user.followers.pluck(:id)
      json.followees user.followed_bys.pluck(:id)
    end
  end
end
