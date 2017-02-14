module.exports = {
    filterScil: {
        arg1: 'scil',
        body: "var data = {};" +
            "for(var item in scil) {" +
            "if(/^(list[1-3]|eVar[0-9]+|prop[0-9]+|pageName|channel)$/.test(item))" +
            "{data[item] = scil[item];}}" +
            "return data;"
    }
};