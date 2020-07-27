var user = {
    name: 'Jaename',
    gender: 'male'
};

var changeName = function(user, newName){
    return{
        name: newName,
        gender: user.gender
    };
};

var user2 = changeName(user, 'Jung');

if(user !== user2){
    console.log('유저 정보 변경');
}