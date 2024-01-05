const generateEmail = ({ name }) => {
  const emailHtml = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <html lang="en">
    
      <head></head>
      <div id="__react-email-preview" style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Log in with this magic link.
      </div>
    
      <body style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
        <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%" style="max-width:37.5em;margin:0 auto;padding:20px 25px 48px;background-image:url(&quot;/assets/raycast-bg.png&quot;);background-position:bottom;background-repeat:no-repeat, no-repeat">
          <tr style="width:100%">
            <td><img alt="Raycast" src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/raycast-logo.png" width="48" height="48" style="display:block;outline:none;border:none;text-decoration:none" />
              <h1 style="font-size:28px;font-weight:bold;margin-top:48px">🪄 Cinnamon Red Hotel Room Booking System</h1>
              <table style="margin:24px 0" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                <tbody>
                  <tr>
                    <td>
                      <p style="font-size:16px;line-height:26px;margin:16px 0"><a target="_blank" style="color:#FF6363;text-decoration:none" href="http://159.223.74.216:5000">👉 Click here to visit our latest application 👈</a></p>
                      <p style="font-size:16px;line-height:26px;margin:16px 0">Dear ${name}<br><br>
                      Thank you for reaching out to us through our website.We are thrilled to inform you that your connection with Cinnamonredhotel has been successfully established. <br><br>
    
                      At Cinnamonredhotel, we are committed to providing our guests with a seamless and delightful experience. Your interest in our services means a lot to us, and we are excited to have you as a part of our growing community. <br><br>
                      
                      As a valued member, you can look forward to receiving exclusive offers and updates tailored just for you. Whether it's special promotions, upcoming events, or exciting new features, we'll make sure you stay informed about all the happenings at Cinnamonredhotel. <br><br>
                      
                      If you have any specific preferences or requirements for your future stays, feel free to let us know. We are here to ensure that your time with us is nothing short of exceptional. <br><br>
                      
                      Once again, thank you for choosing Cinnamonredhotel. We are eager to make your stay with us memorable and look forward to keeping you informed about the latest offerings.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p style="font-size:16px;line-height:26px;margin:16px 0">Best Regards,<br />- Full Stack Development Team - Group 25</p>
              <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#dddddd;margin-top:48px" /><img src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/raycast-logo.png" width="32" height="32" style="display:block;outline:none;border:none;text-decoration:none;-webkit-filter:grayscale(100%);filter:grayscale(100%);margin:20px 0" />
              <p style="font-size:12px;line-height:24px;margin:16px 0;color:#8898aa;margin-left:4px">NSBM Green University.</p>
              <p style="font-size:12px;line-height:24px;margin:16px 0;color:#8898aa;margin-left:4px">University Of Plymouth</p>
            </td>
          </tr>
        </table>
      </body>
    
    </html>`;

  return emailHtml;
};

export default generateEmail;
