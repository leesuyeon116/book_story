function eventCard(category) {
    var cards = document.getElementsByClassName('event-card');
    for (var i = 0; i < cards.length; i++) {
        if (category === 'all') {
            cards[i].style.display = 'block';
        } else {
            if (cards[i].classList.contains(category)) {
                cards[i].style.display = 'block';
            } else {
                cards[i].style.display = 'none';
            }
        }
    }
}
