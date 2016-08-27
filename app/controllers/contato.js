var contatos = [
    {_id: 1, nome: "Fulano de tal", email: "fulano_boladinho@email.com"},
    {_id: 2, nome: "Beltrano de tals", email: "beltrano_bolado@email.com"},
    {_id: 3, nome: "Siclano de tales", email: "siclano_boladao@email.com"}
];

module.exports = function() {
    var controller = {};
    
    controller.listaContatos = function(req, res) {
        res.json(contatos);
    };
    
    return controller;
};