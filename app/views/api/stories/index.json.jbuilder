

@stories.each do |story|
    json.set! story.id do
        json.extract! story, :title, :body, :id
        json.user story.user.username
    end

end