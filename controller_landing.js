//funksjon til en onclick på knapp som er i view_quiz, så du kan navigere derfra
//til landing page. 
function goToLanding() {
    model.app.currentPage = 'landing';
    updateView();
}