
json.payload @story, :title, :body, :id

json.comments @story.comments, :id, :body, :user_id, :created_at
