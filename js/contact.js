$(document).ready(function () {
    function isCaptchaChecked(index) {
        return grecaptcha && grecaptcha.getResponse(index).length !== 0;
      }


    $('.formContact').submit(function (e) {
        e.preventDefault();
        var formIndex = $(this).attr('data-formIndex');
        // let bGoogle = $(this).find('.bm-google'),
        //     gHtml = `<div id="g-recaptcha" class="g-recaptcha mb-3" data-sitekey="6Lf7b2whAAAAANwmeutYIPhvxFVAC0DPv7Kfhe-v"></div>`;
        // bGoogle.html(gHtml);            
        // console.log(bGoogle)
        var fname = $(this).find('.fname').val(),
            email = $(this).find('.email').val(),
            city = $(this).find('.city').val(),
            country = $(this).find('.country').val(),
            company = $(this).find('.company').val(),
            phone = $(this).find('.phone').val(),
            terms = $(this).find('.termsCheckBox'),
            updateCheck = $('.updatedCheckBox'),
            userMessage = $(this).find('.message').val();


        if (fname == '' || email == '' || city == "" || country == "") {
            $('.statusForm').fadeIn(500).html('All fields are mandatory');
        }
        if (!terms.prop('checked')) {
            $('.statusForm').fadeIn(500).html('Please agree to the terms & conditions');
            $('.statusForm').css({
                'color': 'red'
            })
            return;
        }
        if(!isCaptchaChecked(formIndex)){
            $('.statusForm').fadeIn(500).html('Oops, you have to check the recaptcha !');
            $('.statusForm').css({
                'color': 'red'
            })
            return;
        }
        // if (!updateCheck.prop('checked')) {
        //     $('.statusForm').fadeIn(500).html('Please give permission to terms & conditions');
        //     $('.statusForm').css({
        //         'color': 'red'
        //     })
        //     return;
        // }
        else {
            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "ibbukhan@gmail.com",
                Password: "B4DBA7020E0851C9F0D769D72BEEAEE20B75",
                To: "info@bilitielectric.com",
                From: 'info@bilitielectric.com',
                Subject: `Query From ${fname}`,
                Body: `<html>
                        <div>
                        <h2>User Details</h2>
                            <table style="width:500px;border:1px solid #000">
                                <tr style="border:1px solid #000; padding:10px 0px;background-color:#000;color:#fff">
                                    <th style="padding:5px">Name</th>
                                    <th style="padding:5px">Company</th>
                                    <th style="padding:5px">Email</th>
                                    <th style="padding:5px">Phone</th>
                                    <th style="padding:5px">City</th>
                                    <th style="padding:5px">Country</th>
                                    <th style="padding:5px">Message</th>
                                </tr>

                                <tr style="border:1px solid #000">
                                    <td style="padding:5px">${fname}</td>
                                    <td style="padding:5px">${company.length == 0 ? '-': company}</td>
                                    <td style="padding:5px">${email}</td>
                                    <td style="padding:5px">${phone.length == 0 ? '-' : phone}</td>
                                    <td style="padding:5px">${city}</td>
                                    <td style="padding:5px">${country}</td>
                                    <td style="padding:5px">${userMessage}</td>
                                </tr>
                            </table>
                        </div>
                    </html>       
                `,
            })
                .then(function (message) {
                    console.log(message)
                    $('.statusForm').fadeIn(500).html('The form was submitted successfully!');
                    $('.statusForm').css({
                        'color': 'green'
                    })
                    $('.fname').val('');
                    $('.email').val('');
                    $('.city').val('');
                    $('.country').val('');
                    $('.company').val('');
                    $('.phone').val('');
                    $('.message').val('');
                    $('input[type=checkbox]').prop('checked',false);
                    grecaptcha.reset(formIndex);
                });


                setTimeout(()=>{
                    $('.statusForm').fadeOut().html('');
                },5000)
        }
    });
});