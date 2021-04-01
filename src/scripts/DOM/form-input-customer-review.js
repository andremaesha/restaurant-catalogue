const DomElement = () => {
  const alertTemplate = document.getElementById('alert');
  const FormInputName = document.getElementById('name-form');
  const FormInputReview = document.getElementById('review-form');
  const Submit = document.getElementById('submit');
  const TemplateAlertCustomerReview = document.getElementById('template-alert-customer-review');

  return {
    alertTemplate: alertTemplate,
    FormInputName: FormInputName,
    FormInputReview: FormInputReview,
    Submit: Submit,
    TemplateAlertCustomerReview: TemplateAlertCustomerReview,
  };
};

export default DomElement;
