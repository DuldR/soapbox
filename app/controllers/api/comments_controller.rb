class Api::CommentsController < ApplicationController

    def create

        @comment= Comment.new(comment_params)

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

    def index

        # Might need to limit this
        @comments = Comment.all
    
        render json: @comments

    end

    def update

        @comment = Comment.find(comment_params[:id])

        if @comment.update(comment_params)
            render json: @comment
        else
            render json: @comment.errors.full_messages, status: 422

        end

    end

    def destroy

        # Kill dependents
        @comment = Comment.find(params[:id])

        @comment.destroy

        render json: {}

    end

    private

    def comment_params
        params.require(:comment).permit(:body, :user_id, :story_id, :id)

    end

end
