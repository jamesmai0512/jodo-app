class Task < ApplicationRecord
    belongs_to :project 

    scope :complete, -> { where(done: true) }
    scope :incomplete, -> {where(done: nil)}
end
