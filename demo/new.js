$(myFunction() {
            $('#edit').attr('disabled,true');

            if ($('#name').val() != '' && $('#phonenumber').val() != '') {
                $('edit#').attr('disabled', false);

            } else {
                $('#edit').attr('disabled', true);
            }
        }