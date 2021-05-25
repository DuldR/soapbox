class Api::StoriesController < ApplicationController

    def create

        @story = Story.new(story_params)

        if @story.save
            render json: @story
        else
            render json: ["Not a correct"], status: 422
        end

    end

    def show
        @story = Story.find(params[:id])

        render json: @story

    end

    def update

    end

    def destroy

        # Kill dependents
        @story = Story.find(params[:id])

        @story.destroy

        render json: {}

    end

    def index

        # Might need to limit this
        @stories = Story.all
    
        render json: @stories

    end


    private

    def story_params
        params.require(:story).permit(:body, :user_id)

    end

end
