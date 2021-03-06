import customerForm from './customer-form.component.html';
import headerStyle from './customer-form.component.scss';
import {hideAllMainContent} from "../../../main-sidebar/sidebar/sidebar.component";

var htmlCustomerForm = '<div id="customerForm">' + customerForm + '</div>';
$("app-customer-form").replaceWith(htmlCustomerForm);

/* Submit customer form data */
$('#btn-submit-customer').click(function () {
    console.log("Customer form submit btn clicked");
    // TODO: handle submitting form data
});

/* Cancel button will redirect to the manage customer main page */
$('#btn-cancel-customer').click(function () {
    hideAllMainContent();
    $("#manage-customer").show();
});

/* Delete the customer data */
$('#btn-delete-customer').click(function () {
    console.log("Customer form delete btn clicked");
    // TODO: handle delete customer
});