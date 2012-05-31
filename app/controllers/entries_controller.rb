class EntriesController < ApplicationController
  def index
  end

  def edit
    render "edit"
  end

  def update
    current_user.update_attributes(params[:user])
    render "index"
  end
end
