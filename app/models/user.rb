class User < ActiveRecord::Base
  has_many :entries
  accepts_nested_attributes_for :entries, :allow_destroy => true
end
