# json.set! @storie.id do
#     json.extract! @story, :title, :body
# end

@stories.each do |story|
    json.set! story.id do
        json.extract! story, :title, :body, :id
    end

end