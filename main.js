// interactive pricing component main js

// some extra fix for the range progress fill
const range = document.getElementById('range');

range.addEventListener('input', progressBarUpdate);

function progressBarUpdate() {
    let progress = range.value + '%';
    range.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0px, hsl(174, 77%, 80%) ' + progress + ', hsl(224, 65%, 95%) ' + progress + ')';
};

progressBarUpdate();

// setting the price and pageviews counter dynamicaly
const billingOptions = document.querySelectorAll('input[type="radio"]');
const pricing = document.getElementById('pricing');
const pageviews = document.getElementById('pageviews');

range.addEventListener('input', priceUpdate);

function priceUpdate() {
    let value = parseFloat(range.value);
    let price = 8;
    let views = '10K';

    if (value > 80) {
        views = '1M';
        price = 36;
    } else if (value > 60) {
        views = '500K';
        price = 24;
    } else if (value > 40) {
        views = '100K';
        price = 16;
    } else if (value > 20) {
        views = '50K';
        price = 12;
    }

    if (billingOptions[1].checked) {
        price -= (price * 25)/ 100;
    }

    pageviews.textContent = views + ' pageviews';
    pricing.innerHTML = '$' + price.toFixed(2) + '<span>/ month</span>';
}

// toggle button functionality
const toggle = document.querySelector('.toggle');


toggle.addEventListener('click', () => {
    for(let i = 0; i < billingOptions.length; i++) {
        if (!billingOptions[i].checked) {
            billingOptions[i].checked = true;
            toggleChange();
            break;
        }
    }
});

billingOptions.forEach(element => {
    element.addEventListener('input', toggleChange);
});

function toggleChange() {
    if (billingOptions[1].checked) {
        billingOptions[1].parentNode.style.backgroundColor = 'hsl(174, 86%, 45%)';
    } else {
        billingOptions[1].parentNode.style.backgroundColor = 'hsl(223, 50%, 87%)';
    }
    priceUpdate();
};

priceUpdate();

