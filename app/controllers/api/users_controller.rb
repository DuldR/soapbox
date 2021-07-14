class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        @user.password = user_params[:password]

        if @user.save
            render json: @user
        else
            render json: ["username taken"], status: 422
        end
        

    end

    def index

        @users = User.order(Arel.sql('RANDOM()')).limit(3)
        render :index

    end

    private 

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end


end
