class UpdateSpecialAddLatLong < ActiveRecord::Migration[7.0]
  def change
    add_column :specials, :lat, :decimal, {:precision=>10, :scale=>6}
    add_column :specials, :lng, :decimal, {:precision=>10, :scale=>6}
  end
end
