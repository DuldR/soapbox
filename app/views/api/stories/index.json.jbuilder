

@stories.each do |story|
    json.set! story.id do
        json.extract! story, :title, :body, :user
    end

end