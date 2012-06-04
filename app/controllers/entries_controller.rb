class EntriesController < ApplicationController
  before_filter :prepare_vars

  def index
    conditional_render :action => :index
  end

  def edit
    conditional_render :action => :edit
  end

  def update
    current_user.update_attributes(params[:user])
    conditional_render :action => :index
  end

  private

  def prepare_vars
    @entries = current_user.entries.order(params[:order])
  end

  def conditional_render(opts)
    respond_to do |format|
      format.html { render opts }
      format.js { render opts.merge(:layout => false) }
    end
  end
end
