class Api::CommentsController < ApplicationController

    def create

        @commnet= Comment.new(comment_params)

        if @comment.save
            render json: @comment
        else
            render json: ["Not a correct"], status: 422
        end

    end

    def show
        @comment = Comment.find(params[:id])

        render json: @comment

    end

    # def update

    #     @story = Story.find(story_params[:id])

    #     if @story.update(story_params)
    #         render json: @story
    #     else
    #         render json: @story.errors.full_messages, status: 422

    #     end

    # end

    # def destroy

    #     # Kill dependents
    #     @story = Story.find(params[:id])

    #     @story.destroy

    #     render json: {}

    # end

    # def index

    #     # Might need to limit this
    #     @stories = Story.all
    
    #     render json: @stories

    # end


    private

    def comment_params
        params.require(:comment).permit(:body, :user_id, :story_id)

    end

end
