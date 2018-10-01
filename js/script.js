/******************************************
FSJS project - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
//global variables to store dom elements

let li = document.getElementsByTagName('li');
let countLi = $('.student-list li').length;
//pages stores the number of list items divided by 10(10 list items per page)
let pages = Math.ceil(countLi / 10);
let ul = $('<ul></ul>');
let pageNumber;
// Create a function to hide all of the items in the list except for the ten you want to show
// Tip: Keep in mind that with a list of 54 students, the last page will only display four

//Search function that checks for input and matches with names in list. Changes page number to only 1.
//Hides all other list items and only display list item that matches search
function search(){
    let value = $('#searchInput').val();
    //($('.student-list li h3')[2].innerHTML);
        for(i=0;i<$('.student-list li').length;i++){
            //if statement checks for test
            if($('.student-list li h3')[i].innerHTML.toLowerCase().includes(value.toLowerCase())){
                $(`.student-item`).hide();
                $(`.pagination li:gt(0)`).hide();
                $(`.student-item`).eq(i).show();
                //if search is empty then show first 10 list items. 
                //Show all pages as well
                if(value === ""){
                    $(`.student-item:lt(10)`).show();
                    $('.student-item:gt(9)').hide();
                    $('.pagination li').show();
                }
          }
        }
    }

$(document).ready(function() {
    
        //local variables to store doms needed in this function
        const div = $('<div></div>')

        //search(value);
        let searchBar = $('<input type="text" onkeyup="search()" id="searchInput" placeholder="Search for names..">').addClass('search-bar');
        let submitButton = $('<input type="submit" value="Submit">').addClass('btn btn-info');
    //append form, button and search input.
    $('.page-header').append('<form></form>');
    $('.page-header form').append(searchBar);
    $('.page-header form').append(submitButton);
    //move search and submit button to the right side of screen
    $('.page-header form').css({'float':'right'});
    searchBar.css({'margin-right':'10px', 'float':'left', 'text-align': 'right'});


    //only shows first 10 items
    $('ul li:gt(9)').hide();
    div.addClass('pagination')
    ul.addClass('pagination-list')
    $('.page').append(div);
    //creates unordered list for page numbers
    $('.pagination').append(ul);
    //var html = $() 

    //for loop appends list to ul for each page needed
    for(let i = 0; i < pages; i++)
        {
            ul.append($(`<li><a href="#">${i+1}</a></li>`));
        }

        //click function that tests for the page number clicked
    $('a').click(function(){
        //local variables that store math behind which list items to show
        let page = $(this).text();
        let min = (parseInt(page)*10)-10;
        let max = (parseInt(page)*10) -1;
        let content = $(`.student-item`);
        $('.active').removeClass('active');
        $(this).addClass('active');

        //function to hide items that should not show according to page number
        function hidePage(){
            $(`.student-item:lt(${min})`).hide();
            $(`.student-item:gt(${max})`).hide();
        }

        //switch statement used to test for which page number is clicked
        switch(page) {
            //show appropriate list items and hide the rest
            case '1':
                $(`.student-item:lt(${max +1})`).show();
                $(`.student-item:gt(${max})`).hide();
                break;
            case '2':
            //shows all items and then hides necessary list items
            content.show();
                hidePage();
                break;
            case '3':
                content.show();
                hidePage();
                break;
            case '4':
                content.show();
                hidePage();
                break;
            case '5':
                content.show();
                hidePage();
                break;
            case '6':
                content.show();
                hidePage();
            }
            
    })

    
    //let value = $("#search-bar").value.toUpperCase();
  
    // $(this).text();
    //console.log($('a')[0].val());
    });
//PASS The page number link. On the click of the page number.. load the appropriate lists for the page number
// Create and append the pagination links - Creating a function that can do this is a good approach



// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here






