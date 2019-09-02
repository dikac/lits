QUnit.test("Arcana.String_.Function_.UpperFirst default", function( assert ) {

    let fn = Arcana.String_.Function_.UpperFirst;

    assert.equal(fn('abcde'), 'Abcde', "Passed!");
    assert.equal(fn('fghij'), 'Fghij', "Passed!");
    assert.equal(fn('abcde fghij'), 'Abcde fghij', "Passed!");

});




