
function fetchGithub( username ){
  let url = `https://api.github.com/users/${username}/repos`;
  fetch( url )
    .then( response => response.json() )
    .then( responseJSON => displayResults( responseJSON ) )
}

function displayResults( responseJSON ){
  $( '.results' ).empty();
  for( let i = 0; i < responseJSON.length; i ++ ){
    $( '.results' ).append( `<li> 
                              ${responseJSON[i].name} 
                              <a href="${responseJSON[i].html_url}"> 
                                Link
                              </a>
                            </li> ` )
  }
}


function watchForm(){
  $( '#js-form' ).on( 'submit', function( event ){
    event.preventDefault();

    let username = $( '.username' ).val();

    fetchGithub( username );
  });
}


watchForm();