json.follows do
  @follows.each do |follow|
    json.set! follow.id do
      json.partial! 'api/follows/follow', follow: follow
    end
  end
end

# json.users do
#   @users.each do |user|
#     json.set! user.id do
#       json.extract! user, :id, :username, :name, :profile_url, :photos
#     end
#   end
# end
