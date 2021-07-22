class Api::StoriesController < ApplicationController

    def create

        @story = Story.new(story_params)

        if @story.save
            render :create
        else
            render json: ["Not a correct"], status: 422
        end

    end

    def show
        # Ok, working now. Need to jbuild it out.
        @story = Story.includes(:comments).find_by(id: params[:id])
        render :show

    end

    def update

        @story = Story.find(story_params[:id])

        if @story.update(story_params)
            render json: @story
        else
            render json: @story.errors.full_messages, status: 422

        end

    end

    def destroy

        # Kill dependents
        @story = Story.find(params[:id])

        @story.destroy

        render json: {}

    end

    def index

        # Might need to limit this
        @stories = Story.includes(:user, :topics).all
    
        render :index

    end


    private

    def story_params
        params.require(:story).permit(:id, :body, :user_id, :title)

    end

end
