class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.integer :user_id
      t.text :body
      t.integer :priority
      t.date :due_date
      t.boolean :completed

      t.timestamps
    end
  end
end
