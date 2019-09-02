QUnit.test( "Arcana.String_.Function_.UpperWords default", function( assert ) {

    let splitters = [' '];
    let fn = Arcana.String_.Function_.UpperWords;

    assert.equal(fn('abcde', splitters), 'Abcde', "Passed!");
    assert.equal(fn('fghij', splitters), 'Fghij', "Passed!");
    assert.equal(fn('abcde fghij', splitters), 'Abcde Fghij', "Passed!");
    assert.equal(fn('abcde fghij+klmno', splitters), 'Abcde Fghij+klmno', "Passed!");

    splitters = [' ', '+'];
    assert.equal(fn.convert('abcde fghij+klmno', splitters), 'Abcde Fghij+Klmno', "Passed!");
});




