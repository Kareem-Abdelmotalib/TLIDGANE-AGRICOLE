jQuery(document).ready(function($) {
    // Event handler for the form submission
    $('#image-generate-form').on('submit', function(e) {
        e.preventDefault();

        // Get the message from the input field
        var message = $('#message').val();

        // Make an AJAX request to the server
        $.ajax({
            url: imggenerate.ajaxurl,
            type: 'POST',
            data: {
                action: 'image_generate_plugin_generate_image',
                message: message
            },
            beforeSend: function() {
                // Show a loading spinner or any other indicator
                $('#image-generate-result').html('Generating image...');
            },
            success: function(response) {
                // Handle the successful response
                if (response.success) {
                    // Display the generated image
                    $('#image-generate-result').html('<img src="' + response.data + '">');
                } else {
                    // Display an error message
                    $('#image-generate-result').html('Error: ' + response.data);
                }
            },
            error: function() {
                // Display an error message
                $('#image-generate-result').html('An error occurred');
            }
        });
    });
});
