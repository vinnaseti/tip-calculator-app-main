let bill = 0;
let people = 1;
let tip = 0;
let tip_amount;
let total;
let tip_person;
let total_person;
//reset button

// bill input area
let bill_area = document.querySelector('div.bill div.input-field');
let bill_input = document.querySelector('div.bill div.input-field input#fbill');
let bill_warning = document.querySelector('div.bill div.title p');

bill_input.addEventListener('focusin', function(e){
    if(bill_area.classList.contains('outline-false') == false){
        bill_area.classList.add('outline-true');
    }
});

bill_input.addEventListener('focusout', function(e){
    bill_area.classList.remove('outline-true');
});

bill_input.addEventListener('keyup', function(e){
    if(bill_input.value.length == 0){
        bill_area.classList.remove('outline-true');
        bill_area.classList.add('outline-false');
        bill_warning.classList.remove('hide');
    } else {
        bill_area.classList.add('outline-true');
        bill_area.classList.remove('outline-false');
        bill_warning.classList.add('hide');
        bill = parseFloat(bill_input.value).toFixed(2);
        result();
    }
});

// tip input area
let tip_input = document.querySelector('#ftip');
let custom = document.querySelector('#ftip #custom');
tip_input.addEventListener('change', function(e){
    let target = e.target;
    if(target == custom){
        tip = target.value / 100;
    } else {
        tip = target.value;
    }
    result();
})

//number of people input area
let people_area = document.querySelector('div.people div.input-field');
let people_input = document.querySelector('div.people div.input-field input#fpeople');
let people_warning = document.querySelectorAll('div.people div.title p')[0];
let people_warning_zero = document.querySelectorAll('div.people div.title p')[1];

people_input.addEventListener('focusin', function(e){
    if(!people_area.classList.contains('outline-false')){
        people_area.classList.add('outline-true');
    }
});

people_input.addEventListener('focusout', function(e){
    people_area.classList.remove('outline-true');
    if(people_input.value == 0){
        people_area.classList.add('outline-false');
        people_warning.classList.add('hide');
        people_warning_zero.classList.remove('hide');
    } else{
        people_warning_zero.classList.add('hide');
    }
});

people_input.addEventListener('keyup', function(e){
    
    if(people_input.value.length == 0 || people_input.value == null){
        people_area.classList.remove('outline-true');
        people_area.classList.add('outline-false');
        people_warning.classList.remove('hide');
        
    } else {
        
        people_area.classList.add('outline-true');
        people_area.classList.remove('outline-false');
        people_warning.classList.add('hide');
        people = parseFloat(people_input.value).toFixed(2);
        result();
    }
});
//reset button
let reset = document.querySelector('input[type="reset"');

reset.addEventListener('click', function(e){
    bill = 0;
    people = 1;
    tip = 0;
    tip_area.innerHTML= parseFloat(0).toFixed(2);
    total_area.innerHTML= parseFloat(0).toFixed(2);
})
reset.disabled = true;
//function (Result Display)

let tip_area = document.querySelector('#tip-display strong');
let total_area = document.querySelector('#total-display strong');
const result = function(){
    tip_amount = (bill*tip);
    total = (parseFloat(bill)+parseFloat(tip_amount));
    tip_person = tip_amount / people;
    total_person = total / people;
    tip_area.innerHTML= parseFloat(tip_person).toFixed(2);
    total_area.innerHTML= parseFloat(total_person).toFixed(2);
    reset.disabled = false;
};


