const generatePaymentConfiremedEmail = ({ transactionId, roomType, noOfRooms, reservationId, checksIn, checksOut, amount, image }) => {
    const emailHtml = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <html lang="en">
    
      <head></head>
      </div>
    
      <body style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
        <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%" style="max-width:37.5em;margin:10px auto;width:600px;border:1px solid #E5E5E5">
          <tr style="width:100%">
            <td>
              <table style="padding:22px 40px;background-color:#F7F7F7" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                <tbody>
                  <tr>
                    <td>
                      <table width="100%" align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                        <tbody style="width:100%">
                          <tr style="width:100%">
                            <td>
                              <p style="font-size:14px;line-height:2;margin:0;font-weight:bold">Transaction Id</p>
                              <p style="font-size:14px;line-height:1.4;margin:12px 0 0 0;font-weight:500;color:#6F6F6F">${transactionId}</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#E5E5E5;margin:0" />
              <table style="padding:40px 74px;text-align:center" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                <tbody>
                  <tr>
                    <td><img alt="Nike" src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/nike-logo.png" width="66" height="22" style="display:block;outline:none;border:none;text-decoration:none;margin:auto" />
                      <h1 style="font-size:32px;line-height:1.3;font-weight:700;text-align:center;letter-spacing:-1px">Reservation is Booked Successfully</h1>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#E5E5E5;margin:0" />
              <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#E5E5E5;margin:0" />
              <table style="padding-left:40px;padding-right:40px;padding-top:40px;padding-bottom:40px" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                <tbody>
                  <tr>
                    <td>
                      <table width="100%" align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                        <tbody style="width:100%">
                          <tr style="width:100%">
                            <td><img alt="Brazil 2022/23 Stadium Away Women&#x27;s Nike Dri-FIT Soccer Jersey" src="https://motopress.com/wp-content/uploads/2020/11/hotel-booking-pdf-invoices-915x524.jpg" width="260px" style="display:block;outline:none;border:none;text-decoration:none;float:left" /></td>
                            <td style="vertical-align:top;padding-left:12px">
                              <p style="font-size:14px;line-height:2;margin:0;font-weight:500"><span style="font-weight: bold;">Room Type:</span> ${roomType}</p>
                              <p style="font-size:14px;line-height:2;margin:0;font-weight:500"><span style="font-weight: bold;">No of Rooms:</span> ${noOfRooms}</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#E5E5E5;margin:0" />
              <table style="padding-left:40px;padding-right:40px;padding-top:22px;padding-bottom:22px" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                <tbody>
                  <tr>
                    <td>
                    <div style="font-weight: bold;">Reservation Id: <span style="font-weight: normal;">${reservationId}</span></div>
                    <div style="font-weight: bold; margin-top: 10px;">Checks In: <span style="font-weight: normal;">${checksIn}</span></div>
                    <div style="font-weight: bold; margin-top: 10px; ">Checks Out: <span style="font-weight: normal;">${checksOut}</span></div>
                    <div style="font-weight: bold; margin-top: 10px;">Amount: <span style="font-weight: normal;">${amount}</span></div>
                    <div style="font-weight: bold; margin-top: 10px; margin-bottom: 10px;">Payment Status: <span style="font-weight: normal;">Confirmed</span></div>
                      <table width="100%" align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                        <tbody style="width:100%">
                          <tr style="width:100%">
                            <td align="center"><a target="_blank" href="http://159.223.74.216:5000" style="color:#000;text-decoration:none;border:1px solid #929292;font-size:16px;padding:10px 0px;width:220px;display:block;text-align:center;font-weight:500">Reservation Status</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#E5E5E5;margin:0" />
              <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#E5E5E5;margin:0" />
              <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#E5E5E5;margin:0" />
              <table style="padding-top:22px;padding-bottom:22px" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                <tbody>
                  <tr>
                    <td>
                      <p style="font-size:32px;line-height:1.3;margin:16px 0;font-weight:700;text-align:center;letter-spacing:-1px">Cinnamonred.com</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#E5E5E5;margin:0;margin-top:12px" />
              <table style="padding-top:22px;padding-bottom:22px" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                <tbody>
                  <tr>
                    <td>
                      <table width="100%" style="width:166px;margin:auto" align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0">
                        <tbody style="width:100%">
                          <tr style="width:100%">
                            <td>
                              <p style="font-size:13px;line-height:24px;margin:0;color:#AFAFAF;text-align:center">Web Version</p>
                            </td>
                            <td>
                              <p style="font-size:13px;line-height:24px;margin:0;color:#AFAFAF;text-align:center">Privacy Policy</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p style="font-size:13px;line-height:24px;margin:0;color:#AFAFAF;text-align:center;padding-top:30px;padding-bottom:30px">Please contact us if you have any questions. (If you reply to this email, we won&#x27;t be able to see it.)</p>
                      <p style="font-size:13px;line-height:24px;margin:0;color:#AFAFAF;text-align:center">© 2022 Cinnamonred, Inc. All Rights Reserved.</p>
                      <p style="font-size:13px;line-height:24px;margin:0;color:#AFAFAF;text-align:center">NSBM Green University 💚 / University of Plymouth</p>
                      <p style="font-size:13px;line-height:24px;margin:0;color:#AFAFAF;text-align:center">Full-Stack Development Group Project - Group 25 💖</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>
      </body>
    
    </html>`;
  
    return emailHtml;
  };
  
  export default generatePaymentConfiremedEmail;
  