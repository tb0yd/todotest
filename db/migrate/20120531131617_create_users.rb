class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :session_id

      t.timestamps
    end
  end
end
