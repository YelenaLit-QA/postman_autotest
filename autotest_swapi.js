//autotest for https://swapi.dev/

pm.test("Date is present", function () {
    pm.response.to.have.header("Date");
});

pm.test("Тест пройден", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql('Sentinel-class landing craft');
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});