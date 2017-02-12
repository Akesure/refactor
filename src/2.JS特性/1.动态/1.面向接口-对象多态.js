var duck = {
    duckSinging: function(){
        console.log( '嘎嘎嘎' );
    }
};
var chicken = {
    duckSinging: function(){
        console.log( '叽叽叽' );
    }
};

var choir = []; // 合唱团
var joinChoir = function( animal ){
    if ( animal && typeof animal.duckSinging === 'function' ){
        choir.push( animal );
        console.log( '恭喜加入合唱团' );
        console.log( '合唱团已有成员数量:' + choir.length );
    }
};

var startChoir = function(){
    choir.forEach(c=>{
        c.duckSinging();
    })
};

joinChoir( duck ); // 恭喜加入合唱团
joinChoir( chicken ); // 恭喜加入合唱团

startChoir();