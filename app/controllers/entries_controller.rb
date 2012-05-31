class EntriesController < ApplicationController
  def index
    setup_index
  end

  def edit
    current_user.entries.push Entry.new
    render "edit"
  end

  def update
    current_user.update_attributes(params[:user])
    setup_index
    render "index"
  end

  private

  def setup_index
    @entries = current_user.entries
  end
end
