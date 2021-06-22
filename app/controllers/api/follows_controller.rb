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

    def show

        @follow = Follow.where(followable_id: follow_params[:followable_id], followable_type: follow_params[:followable_type], follower_id: follow_params[:follower_id])

        if @follow.empty?
            render json: {}
        else
            render :show
        end

    end

    def destroy
        @follow = Follow.find_by(id: follow_params[:id])
        @follow.destroy
        
        render json: @follow
    end


    private

    def follow_params
        params.require(:follow).permit(:followable_id, :followable_type, :follower_id, :follower_type, :id)
    end
end
