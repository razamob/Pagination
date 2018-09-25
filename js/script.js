/******************************************
FSJS project - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
let li = document.getElementsByTagName('li');

//console.log(div);
let countLi = $('.student-list li').length;
let pages = Math.ceil(countLi / 10);
let ul = $('<ul></ul>');
let pageNumber;
// Create a function to hide all of the items in the list except for the ten you want to show
// Tip: Keep in mind that with a list of 54 students, the last page will only display four

$(document).ready(function() {
    const div = $('<div></div>')

    let searchBar = $('<input type="text" id="searchInput" placeholder="Search for names..">');
    let submitButton = $('<input type="submit" value="Submit">').addClass('btn btn-info');

    $('.page-header').append('<form></form>');
    $('.page-header form').append(searchBar);
    $('.page-header form').append(submitButton);
  


    $('.page-header form').css({'float':'right'});
    searchBar.css({'margin-right':'10px', 'float':'left', 'text-align': 'right'});

    $('ul li:gt(9)').hide();
    div.addClass('pagination')
    ul.addClass('pagination-list')
    $('.page').append(div);
    $('.pagination').append(ul);
    //var html = $() 

    for(let i = 0; i < pages; i++)
        {
            ul.append($(`<li><a href="#">${i+1}</a></li>`));
        }

    $('a').click(function(){
        let page = $(this).text();
        let min = (parseInt(page)*10)-10;
        let max = (parseInt(page)*10) -1;
        let content = $(`.student-item`);
        $('.active').removeClass('active');
        $(this).addClass('active');

        function hidePage(){
            $(`.student-item:lt(${min})`).hide();
            $(`.student-item:gt(${max})`).hide();
        }

        switch(page) {
            case '1':
                $(`ul li:lt(${max})`).show();
                break;
            case '2':
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
    // $(this).text();
    //console.log($('a')[0].val());
    });

//PASS The page number link. On the click of the page number.. load the appropriate lists for the page number
// Create and append the pagination links - Creating a function that can do this is a good approach



// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here





