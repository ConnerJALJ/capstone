const extend = () => {
  console.log('clicked');
  let body = document.getElementsByTagName('body')[0];
  let cardZone = document.getElementsByClassName('card-zone')[0];
  let extendZoneButton = document.getElementsByClassName('extend-zone-button')[0];
  let arrow = document.getElementsByClassName('indicator-arrow')[0];
  if(!cardZone.classList.contains('extended')) {
    setStyleOnElement(body,
      {
        gridTemplateAreas:`'github progresstracker mainsite'
                          'github progresstracker mainsite'
                          'github progresstracker mainsite'`,
        gridTemplateColumns: '3rem 1fr 3rem'
      });
    setStyleOnElement(cardZone, 
      {
        height: '90%', 
        top: '1.5rem', 
        right: '0', 
        bottom: '2rem', 
        left: '0'
      });
    setStyleOnElement(extendZoneButton,
      { right: '0', 
        bottom: '1.5rem', 
        left: '0', 
        boxShadow: '4px 2px 5px #000, -4px 2px 5px #000'
      });
    arrow.classList.remove('fa-angle-double-down');
    arrow.classList.add('fa-angle-double-up');
    console.log(arrow);
    cardZone.classList.add('extended')
  } else {
    body.style='';
    cardZone.style='';
    extendZoneButton.style='';
    cardZone.classList.remove('extended')
    arrow.classList.remove('fa-angle-double-up');
    arrow.classList.add('fa-angle-double-down');
  }
}

const setStyleOnElement = (element, styles) => {
  Object.assign(element.style, styles);
}

/* This loop has fills in the posts for the Progress Tracker */
for(const [key, value] of Object.entries(JSON.parse(posts)).reverse()) {
  //console.log(`${key}: ${value}`)
  /* post element*/
  let post = document.createElement('div');
  post.classList.add('column', 'is-half-tablet', 'is-one-third-desktop');
  /* card element >> child of post */
  let card = document.createElement('div');
  card.classList.add('card');
  /* card-content element >> child of card */
  let cardContent = document.createElement('div');
  cardContent.classList.add('card-content');
  /* date element >> child of card-content*/
  let date = document.createElement('time');
  /* date text node >> child of date */
  let dateText = document.createTextNode(key);
  /* content element >> child of card-content */
  let content = document.createElement('p');
  /* content text node >> child of content */
  let contentText = document.createTextNode(value);

  /* post << card << card-content << (date << date-text) && (content << content-text) */
  post.appendChild(card).appendChild(cardContent);
  date.appendChild(dateText);
  content.appendChild(contentText);
  cardContent.appendChild(date);
  cardContent.appendChild(content);
  
  /* append the post to the container element */
  let container = document.getElementById('container');
  container.appendChild(post)
}