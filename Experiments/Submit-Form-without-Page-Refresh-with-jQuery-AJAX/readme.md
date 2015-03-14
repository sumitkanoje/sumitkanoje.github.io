## Submit Form without Page Refresh with jQuery AJAX

Ajax is a JavaScript based web development technology used for building asynchronous application. Ajax can send and receive date in the background (without page refreshing or redirecting). We need to use XMLHttpRequest object for working with ajax but jQuery library made it more easy to working with ajax by using jQuery.ajax, jQuery.get, jQuery.post methods.

In this post I have a simple html contact us form example that takes information(name, email, subject and message) from user. When user submit the form data send asynchronously to the server. PHP receives XMLHttpRequest request and process data from server side.

####HTML Markup
Let's take a look at html markup. We have a basic html contact us form

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>HTML Form Submit with jQuery AJAX</title>
</head>
<body>
  <h1>Contact us</h1>
  <form action="" method="post">
    <input type="text" name="name" />
    <input type="mail" name="email" />
    <input type="text" name="subject" />
    <textarea name="message"></textarea>
    <button>Send Mail</button>
  </form>
</body>
</html>
```

####JavaScript and jQuery Code
This jQuery code used for submitting form with ajax request using jQuery.ajax method 


```ajax
<!-- import jQuery library -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function() {
  var form = $('#form'); // contact form
  var submit = $('#submit');  // submit button
  var alert = $('.alert'); // alert div for show alert message

  // form submit event
  form.on('submit', function(e) {
    e.preventDefault(); // prevent default form submit

    $.ajax({
      url: '', // form action url
      type: 'POST', // form submit method get/post
      dataType: 'html', // request type html/json/xml
      data: form.serialize(), // serialize form data 
      beforeSend: function() {
        alert.fadeOut();
        submit.html('Sending....'); // change submit button text
      },
      success: function(data) {
        alert.html(data).fadeIn(); // fade in response data
        form.trigger('reset'); // reset form
        submit.html('Send Email'); // reset submit button text
      },
      error: function(e) {
        console.log(e)
      }
    });
  });
});
</script>
```

####PHP Code
We need to presses user submitted data from server side. This PHP code detects ajax request using HTTP_X_REQUESTED_WITH header request, looks for validation of data and send mail with PHP mail function. 

```php
# if request sent using HTTP_X_REQUESTED_WITH
if( isset( $_SERVER['HTTP_X_REQUESTED_WITH'] ) ){
  if (isset($_POST['name']) AND isset($_POST['email']) AND isset($_POST['subject']) AND isset($_POST['message'])) {
    $to = 'your@mail.id';

    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    $sent = email($to, $email, $name, $subject, $message);
    if ($sent) {
      echo 'Message sent!';
    } else {
      echo 'Message couldn\'t sent!';
    }
  }
  else {
    echo 'All Fields are required';
  }
  return;
}

/**
 * Email send with headers
 *
 * @return bool | void
 **/
function email($to, $from_mail, $from_name, $subject, $message){
  $header = array();
  $header[] = "MIME-Version: 1.0";
  $header[] = "From: {$from_name}<{$from_mail}>";
  /* Set message content type HTML*/
  $header[] = "Content-type:text/html; charset=iso-8859-1";
  $header[] = "Content-Transfer-Encoding: 7bit";
  if( mail($to, $subject, $message, implode("\r\n", $header)) ) return true; 
}
```

Original Post by [Resalat Haque](http://www.w3bees.com/2013/08/submit-form-without-page-refresh-with.html)  