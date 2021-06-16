class Api::FollowsController < ApplicationController
    def create
        @follow = Follow.new(follow_params)

        if @follow.save
            render json: @follow
        else
            render json: ["Not a good follow"], status: 422
        end
    end

    def index

        @user = User.includes(:followed_stories).includes(:followed_users).find_by(id: params[:user_id])

        render :index

    end

    def destroy
    end


    private

    def follow_params
        params.require(:follow).permit(:followable_id, :followable_type, :follower_id, :follower_type)
    end
end
