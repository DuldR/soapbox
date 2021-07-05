class Api::TopicsController < ApplicationController

    def create
        @topic = Topic.new(topic_params)

        if @topic.save
            render json: @topic
        else
            render json: ["NO SHOT"], status: 422
        end


    end


    def destroy

        @topic = Topic.find(params[:id])
        @topic.destroy
        render json: {}

    end

    def index

        @topics = Topic.all
        render json: @topics

    end

    private

    def topic_params
        params.require(:topic).permit(:topic_name)
    end 
end