class loginPage {
    link_login = '.form-inline > .navbar-nav > :nth-child(2) > .nav-link'
    title_login = '[style="text-decoration:underline"]'
    form_username = '#Username'
    form_password = '#Password'
    btn_login = '.btn-primary'
    title_dashboard = 'h1'
    title_welcome = 'h3'
    title_customer_details = 'h2'
    alert_wrong_username = '.alert-danger'
    alert_wrong_blank_password = '[data-valmsg-for="Password"]'
    alert_wrong_blank_username = '[data-valmsg-for="Username"]'
    btn_logout = '.form-inline > .navbar-nav > :nth-child(2) > .nav-link'
    btn_clear = ':nth-child(7) > :nth-child(2) > .btn-secondary'
}

export default loginPage;