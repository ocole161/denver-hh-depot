class PostMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.post_mailer.post_created.subject
  #
  def post_created
    @special = params[:special]
    # @user = params[:user]
    @greeting = "Hi"


    mail to: "ocoledev@gmail.com", subject: "New Special Created"
  end
end
