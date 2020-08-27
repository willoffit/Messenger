class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login!(@user)
      data = { 
        id: @user.id,
        username: @user.username,
      }
      UsersChannel.broadcast_to("users_channel", data)
      render "api/users/show"
    else
      render json: ["We couldn't find an account matching that username and password."], status: 401
    end
  end

  def destroy
    @user = current_user

    if logged_in?
      logout!
      render "api/users/show"
    else
      render json: ["No one is signed in."], status: 404
    end
  end
end
