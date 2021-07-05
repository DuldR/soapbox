class Api::TopicsController < ApplicationController

    def create
    end


    def destroy

    end

    def index

        @topics = Topic.all
        render json: @topics

    end
end