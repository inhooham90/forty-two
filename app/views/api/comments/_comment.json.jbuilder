json.extract! comment, :id, :photo_id, :author_id, :body
json.time_posted distance_of_time_in_words(comment.created_at, Time.now)
