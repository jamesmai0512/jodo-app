class Task < ApplicationRecord

    scope :complete, -> { where(done: true) }
    scope :incomplete, -> {where(done: nil)}
end
