class EntriesController < ApplicationController
  before_filter :prepare_vars

  def index
  end

  def edit
    render "edit"
  end

  def update
    current_user.update_attributes(params[:user])
    render "index"
  end

  private

  def prepare_vars
    @entries = current_user.entries.order(params[:order])
  end
end
