json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username, :name, :profile_url, :photos, :profile_picture
      json.followers user.followers.pluck(:id)
      json.followees user.followed_bys.pluck(:id)
    end
  end
end
