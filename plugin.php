<?php
/*
Plugin Name: CI Prime factorization calculator
Plugin URI: https://www.calculator.io/prime-factorization-calculator/
Description: The prime factorization calculator finds a number's prime factors. The calculator demonstrates the prime factors tree and all factors of the number. 
Version: 1.0.0
Author: Calculator.io
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: ci_prime_factorization_calculator
*/

if (!defined('ABSPATH')) exit;

if (!function_exists('add_shortcode')) return "No direct call for Prime Factorization Calculator by Calculator.iO";

function display_ci_prime_factorization_calculator(){
    $page = 'index.html';
    return '<h2><img src="' . esc_url(plugins_url('assets/images/icon-48.png', __FILE__ )) . '" width="48" height="48">Prime Factorization Calculator</h2><div><iframe style="background:transparent; overflow: scroll" src="' . esc_url(plugins_url($page, __FILE__ )) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="ci_prime_factorization_calculator_iframe"></iframe></div>';
}

add_shortcode( 'ci_prime_factorization_calculator', 'display_ci_prime_factorization_calculator' );