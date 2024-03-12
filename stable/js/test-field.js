const parent = {name: 'parent'};

parent.child = function() {
    let inner = function() {
        console.log(this);
    };
    inner();

};

parent.child();