class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :user_type
end
