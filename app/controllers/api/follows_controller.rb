class Api::FollowsController < ApplicationController
    def create
    end

    def index
        puts params[:id]

        @user = User.includes(:followed_stories).find_by(id: params[:user_id])

        render :index
        # render :index

        # Return a relation
        # @user = User.where(:id => params[:user_id])

        # render json: @user.followed_stories
        # render json: @user.followed_stories

    end

    def destroy
    end


    private

    def follow_params
        params.require(:follow).permit(:followable_id, :followable_type, :follower_id, :follower_type)
    end
end
